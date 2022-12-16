<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\RickAndMortyGestion;
use App\Repository\ProductRepository;
use App\Repository\CartRepository;
use App\Entity\Product;


#[Route("/")]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default')]
    public function index(): Response {
        return $this->render('default/index.html.twig', [
            'message' => "Bienvenue :)"
        ]);
    }

    #[Route('/catalog', name: 'app_catalog', methods: ['GET'])]
    public function catalog(ProductRepository $productRepository): Response
    {
        $responseArray = $productRepository->findAll();

        return $this->render('default/catalog.html.twig', [
            'catalog' => $responseArray
        ]);
    }

    #[Route('/product/{id}', name: 'app_product', methods: ['GET'])]
    public function product(Product $product): Response
    {
        return $this->render('default/product.html.twig', [
            'product' => $product
        ]);
    }

    #[Route('/cart', name: 'app_cart', methods: ['GET'])]
    public function cartPage(CartRepository $cartRepository): Response 
    {
        return $this->render('default/cart.html.twig', [
            'products' => $cartRepository->findAll()
        ]);
    }


    // #[Route('/cart', name: "app_add_product", methods: ["POST"])]
    // public function addProductToCart(Request $request, CartRepository $cartRepository, Product $product): Response
    // {
    //     try {
    //         $data = json_decode($request->getContent(), true);
    //         $quantity = intval($data['quantity']);
    //         $cart = $cartRepository->addProductToCart($product, $quantity);

    //         return $this->json($cart);
    //     }
    //     catch (\Exception $e) {
    //         return $this->json(["error" => "Too many sorry"]);
    //     }
    // }
}
