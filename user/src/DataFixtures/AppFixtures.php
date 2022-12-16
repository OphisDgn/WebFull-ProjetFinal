<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\Product;
use App\Service\RickAndMortyApiService;

class AppFixtures extends Fixture
{
    private $prices = ["3", "12", "10.4", "4.5", "6.7"];
    private $quantities = [0,1,3,5,10,12,16,18,22];
    private RickAndMortyApiService $rickAndMortyApiService;

    public function __construct(RickAndMortyApiService $rickAndMortyApiService) 
    {
        $this->rickAndMortyApiService = $rickAndMortyApiService;
    }

    public function load(ObjectManager $manager): void 
    {
        $data = $this->rickAndMortyApiService->loadApi();
        foreach($data as $model) {
            $product = new Product();
            $product->setName($model->getName());
            $product->setPrice($this->prices[array_rand($this->prices, 1)]);
            $product->setQuantity($this->quantities[array_rand($this->quantities, 1)]);
            $product->setImage($model->getImage());
            $manager->persist($product);
        }

        $manager->flush();
    }
}
