<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AttributesRepository")
 */
class Attributes
{

    /**
     * Many Attributes have Many Products.
     * @ORM\ManyToMany(targetEntity="Products", inversedBy="attribute")
     * @ORM\JoinTable(name="product_attribute_pivot", 
     *      joinColumns={@ORM\JoinColumn(name="attribute_id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="product_id")}
     * )
     */
    private $products;

    public function __construct() {
        $this->products = new \Doctrine\Common\Collections\ArrayCollection();
    }
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
        $this->name = trim($name);

        return $this;
    }

    public function addProducts(Products $product) {
        $this->products[] = $product;
    }
}
