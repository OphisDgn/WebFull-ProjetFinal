<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_user')]
class UserApiController extends AbstractController
{
    #[Route('/user', name: 'api_user_home', methods: "GET")]
    public function index(): Response
    {
        $user = $this->getUser();

        return $this->json([
            'user' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()
        ]);
    }

    #[Route('/check_role', name: 'api_user_check_roles', methods: "POST")]
    public function checkRoles(Request $request) 
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $role = $data["role"];
        if (!$role) {
            return $this->json([
                'message' => 'role manquant'
            ], Response::HTTP_BAD_REQUEST);
        }

        return $this->json(in_array($role, $user->getRoles()));
    }
}
