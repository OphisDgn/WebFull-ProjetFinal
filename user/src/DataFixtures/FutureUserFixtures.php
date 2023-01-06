<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\FutureUser;

class FutureUserFixtures extends Fixture
{

    public function __construct() 
    {
    }

    public function load(ObjectManager $manager): void 
    {
        $user = new FutureUser();
        $user->setEmail("a.va@lid.er");
        $user->setLastname("Valider");
        $user->setFirstname("Aaa");
        $user->setNationality("French");
        $user->setIsValided(false);
        $user->setPhone("0666666651");
        $manager->persist($user);
    
        $user2 = new FutureUser();
        $user2->setEmail("a.va@lid2.er");
        $user2->setLastname("Euuh");
        $user2->setFirstname("Bbbb");
        $user2->setNationality("British");
        $user2->setIsValided(false);
        $user2->setPhone("0666666651");
        $manager->persist($user2);

        $manager->flush();
    }
}
