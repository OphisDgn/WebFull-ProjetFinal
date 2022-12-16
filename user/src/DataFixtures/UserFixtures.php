<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher) 
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void 
    {
        // default user
        $user = new User();
        $user->setEmail("test@test.fr");

        $password = $this->hasher->hashPassword($user, 'test13');
        $user->setPassword($password);
        $user->setRoles(["ROLE_USER"]);
        $manager->persist($user);

        // admin user
        $admin = new User();
        $admin->setEmail("admin@admin.fr");

        $password = $this->hasher->hashPassword($admin, 'admin13');
        $admin->setPassword($password);
        $admin->setRoles(["ROLE_ADMIN"]);

        $manager->persist($admin);
        $manager->flush();
    }
}
