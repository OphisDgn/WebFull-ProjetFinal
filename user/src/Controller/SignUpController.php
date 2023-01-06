<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\FutureUser;
use App\Entity\User;

#[Route('/api/inscription', name: 'app_sign_up')]
class SignUpController extends AbstractController
{
    #[Route('/', name: 'inscription_index', methods: "POST")]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $repository = $entityManager->getRepository(FutureUser::class);
        $data = json_decode($request->getContent(), true);

        $user = new FutureUser();
        $user->setEmail($data["email"]);
        $user->setPhone($data["phone"]);
        $user->setNationality($data["nationality"]);
        $user->setLastname($data["lastname"]);
        $user->setFirstname($data["firstname"]);
        $user->setIsValided(false);

        $repository->save($user, true);

        return $this->json([
            'message' => 'Inscription réussie'
        ]);
    }

    #[Route('/valide-user/{id}', methods: ["POST"], name: 'valide_user')]
    public function validUser(FutureUser $futureUser, EntityManagerInterface $entityManager): Response
    {

        $repository = $entityManager->getRepository(User::class);
        
        $user = $this->getUser();

        $user = new User();
        $user->setEmail($futureUser->getEmail());
        $user->setRoles(['ROLE_USER']);
        $user->setPassword('test');
        $repository->save($user, true);

        $futureUser->setIsValided(true);
        $futureUser->setIdUser($user);
        $entityManager->persist($futureUser);
        $entityManager->flush();
        
        return $this->json([
            'role' => ($user ? $user->getRoles() : 'aucune idee'),
            'futureUser' => $futureUser
        ]);
    }
}
