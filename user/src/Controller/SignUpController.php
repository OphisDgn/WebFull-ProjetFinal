<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/inscription', name: 'app_sign_up')]
class SignUpController extends AbstractController
{
    #[Route('/', name: 'inscription_index', methods: "POST")]
    public function index(): Response
    {
        // TO DO

        return $this->json([
            'message' => 'Inscription réussie'
        ]);
    }

    #[Route('/valide-user/{id}', methods: "POST" )]

    public function validUser(): Response
    {
        // TO DO

        return $this->json([
            'message' => 'Utilisateur validé'
        ]);
    }
}
