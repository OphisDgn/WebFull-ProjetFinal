<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Form\FutureUserType;
use App\Repository\FutureUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api/backoffice', name: 'backoffice')]
class FutureUserController extends AbstractController
{
    #[Route('/', name: 'app_future_user_index', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $repository = $entityManager->getRepository(FutureUser::class);
        $users = $repository->findAll();

        return $this->json([
            'future_users' => $users
        ]);
        // return $this->render('future_user/index.html.twig', [
        //     'future_users' => $futureUserRepository->findAll(),
        // ]);
    }

    #[Route('/new', name: 'app_future_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, FutureUserRepository $futureUserRepository): Response
    {
        $futureUser = new FutureUser();
        $form = $this->createForm(FutureUserType::class, $futureUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $futureUserRepository->save($futureUser, true);

            return $this->redirectToRoute('app_future_user_index', [], Response::HTTP_SEE_OTHER);
        }

        
        return $this->json([
            'future_user' => $futureUser,
            'form' => $form,
        ]);
        // return $this->renderForm('future_user/new.html.twig', [
        //     'future_user' => $futureUser,
        //     'form' => $form,
        // ]);
    }

    #[Route('/{id}', name: 'app_future_user_show', methods: ['GET'])]
    public function show(FutureUser $futureUser): Response
    {
        // return $this->render('future_user/show.html.twig', [
        //     'future_user' => $futureUser,
        // ]);
        
        return $this->json([
            'future_user' => $futureUser,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_future_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, FutureUser $futureUser, FutureUserRepository $futureUserRepository): Response
    {
        $form = $this->createForm(FutureUserType::class, $futureUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $futureUserRepository->save($futureUser, true);

            return $this->redirectToRoute('app_future_user_index', [], Response::HTTP_SEE_OTHER);
        }


        return $this->json([
            'future_user' => $futureUser,
            'form' => $form,
        ]);

        // return $this->renderForm('future_user/edit.html.twig', [
        //     'future_user' => $futureUser,
        //     'form' => $form,
        // ]);
    }

    #[Route('/delete/{id}', name: 'app_future_user_delete', methods: ['DELETE', 'GET'])]
    public function delete($id, EntityManagerInterface $entityManager): Response
    {
        $futureUserRepository = $entityManager->getRepository(FutureUser::class);
        $delU = $futureUserRepository->findOneBy(['id' => $id]);
        
        if (!$delU) {
            throw $this->createNotFoundException(
                'There are no products with the following id: ' . $id
            );
        }
        $entityManager->remove($delU);
        $entityManager->flush();

        // return $this->json([
        //     'message' => $msg
        // ]);

        return $this->redirectToRoute('backofficeapp_future_user_index', [], Response::HTTP_SEE_OTHER);
        
    }
}
