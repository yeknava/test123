<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Products;
use App\Entity\Attributes;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"get"})
     */
    public function index()
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("/products", name="products-list", methods={"get"})
     */
    public function productsList()
    {
        $products = $this->getDoctrine()->getRepository(Products::class)->findAll();
        return $this->json($products);
    }

    /**
     * @Route("/products/{id}/attributes", name="attributes-list", methods={"get"})
     */
    public function attributesList(Products $product)
    {
        $attrs = $this->getDoctrine()->getRepository(Attributes::class)
            ->findAll();
        return $this->json($product->getAttrs());
    }

    /**
     * @Route("/products", name="products-create", methods={"post"})
     */
    public function addProduct(Request $request)
    {
        $dataArray = $request->request->all();
        if(is_null($dataArray) || !count($dataArray)) {
            $dataArray = json_decode($request->getContent(), true);
        }
        if(!isset($dataArray['name']) || empty($dataArray['name'])) return $this->json(['err' => 'name field cant be blank']);
        $em = $this->getDoctrine()->getManager();
        $product = new Products();
        try {
            $product->fill($dataArray);
            $em->persist($product);
            $em->flush();
        } catch (\Exception $e) {
            return $this->json([
                'err' => $e->getMessage(),
                'help_message' => 'try again'
            ]);
        }

        return $this->json($product);
    }

    /**
     * @Route("products/{id}/attributes", name="attributes-create", methods={"post"})
     */
    public function addAttribute(Request $request, Products $product)
    {
        $dataArray = $request->request->all();
        if(is_null($dataArray) || !count($dataArray)) {
            $dataArray = json_decode($request->getContent(), true);
        }
        if(!isset($dataArray['name']) || empty($dataArray['name'])) return $this->json(['err' => 'name field cant be blank']);
        
        $dr = $this->getDoctrine();

        // $product = $dr->getRepository(Products::class)->find($id);

        $em = $dr->getManager();
        $attr = new Attributes();
        $attr->setName($dataArray['name']);
        $attr->addProducts($product);
        $em->persist($attr);
        $em->flush();

        return $this->json($attr);
    }

}
