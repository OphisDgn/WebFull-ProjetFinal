<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FutureUserController extends AbstractController
{
    #[Route('/future/user', name: 'app_future_user')]
    public function index(): Response
    {
        return $this->render('future_user/index.html.twig', [
            'controller_name' => 'FutureUserController',
        ]);
    }
}
