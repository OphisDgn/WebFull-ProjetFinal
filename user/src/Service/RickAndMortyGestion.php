<?php 

namespace App\Service;

use App\Entity\Product;
use App\Entity\Cart;
use App\Repository\CartRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class RickAndMortyGestion {
    /* @var ProductRepository */
    private ProductRepository $repository;
    private CartRepository $cartRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(ProductRepository $repository, CartRepository $cartRepository, EntityManagerInterface $entityManager)
    {
        $this->repository = $repository;
        $this->cartRepository = $cartRepository;
        $this->entityManager = $entityManager;
    }

    public function findAll() {
        return $this->repository->findAll();
    }

    public function findCart() {
        return $this->cartRepository->findAll();
    }

    public function findById(int $id) {
        return $this->repository->findById($id);
    }

    // public function addProductToCart(Product $product, int $quantity) {
    //     if ($quantity > $product->getQuantity()) {
    //         throw new \Exception("too quantity");
    //     }
    //     // @var Cart
    //     $carts = $this->cartRepository->findAll();
    //     if (!isset($carts[0])) {
    //         $cart = new Cart();
    //     } else {
    //         $cart = $carts[0];
    //     }
    //     $cart->addProduct($product);
    //     $this->entityManager->persist($cart);
    //     $this->entityManager->flush();
    //     return $cart;
    // }

    // public function deleteProductToCart(Product $product) {

    //     $carts = $this->cartRepository->findAll();
    //     $cart = $carts[0];
    //     $cart->removeProduct($product);
    //     $this->entityManager->persist($cart);
    //     $this->entityManager->flush();
    //     return $cart;
    // }
}