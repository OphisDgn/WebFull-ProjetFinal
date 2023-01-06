<?php

namespace App\Form;

use App\Entity\FutureUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FutureUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('lastname')
            ->add('firstname')
            ->add('phone')
            ->add('nationality')
            ->add('isValided')
            //->add('idUser')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => FutureUser::class,
        ]);
    }
}
