<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductsRepository")
 */
class Products
{
    /**
     * Many Products have Many Attributes.
     * @ORM\ManyToMany(targetEntity="Attributes", inversedBy="products")
     * @ORM\JoinTable(name="product_attribute_pivot", 
     *      joinColumns={@ORM\JoinColumn(name="product_id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="attribute_id")}
     * )
     */
    private $attributes;

    private $fillable = ['name'];

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank()
     * @Assert\Length(min=3)
     */
    private $name;

    public function __construct() {
        $this->attributes = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->checkWithDecisionTable($name);
        $this->name = trim($name);
        return $this;
    }

    public function addAttr(Attributes $attr) {
        $attr->addProducts($this);
        $this->attributes[] = $attr;
    }

    public function getAttrs()
    {
        return $this->attributes;
    }

    public function fill(array $arr) {
        foreach($arr as $key => $value) {
            if(in_array($key, $this->fillable)) {
                $k = 'set'.ucfirst($key);
                $this->$k($value);
            }
        }
    }

    public function checkWithDecisionTable($name) {
        //since there is no decision table we check it randomly
        if(rand(1, 5) < 3) throw new \Exception('failed by decision table. blame on business rules :P');
    }
}
