# Projet final RIDE

## Problèmes rencontrés

1. Fichier *security.yaml*
    - la route **" /api/inscription/valide-user/{id} "** qui ne voulait pas avoir de restriction d'accès, la route **" /api/inscription "** est donc en **PUBLIC_ACCESS**

## Insomnia

1. Les variables utilisées :
![Variables](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-variables.png)
2. POST - Login Admin :
![Login Admin](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-login-admin.png)
3. POST - Login User :
![Login User](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-login-user.png)
4. La response Bearer utilisée pour toutes les requêtes :
![Response Bearer](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/responseBearer.png)
5. GET - Get User (par un user) :
![Get User (par user)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-getuser.png)
6. GET - Get User (par l'admin) :
![Get User (par admin)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-getuser-admin.png)
7. POST - Check role (par user) :
![Check role (par user)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-checkrole-user.png)
8. POST - Check role (par admin) :
![Check role (par admin)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-checkrole-admin.png)
9. POST - Check role (sans JWT Token) :
![Check role (sans JWT token)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-checkrole-withoutjwt.png)
10. GET - Is admin (par user) :
![Is admin (par user)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-isadmin-user.png)
11. GET - Is admin (par admin) :
![Is admin (par admin)](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-isadmin.png)
12. GET - Liste des users :
![Liste des users](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-list-users.png)
13. GET - Liste des futurs sers :
![Liste des futurs users](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-futureuser.png)
14. POST - Create user (avec route inscription) :
![Create user avec route inscription](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-create-futureuser-inscription.png)
15. POST - Valide futur user :
![Valide futur user](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-valideuser.png)
16. GET - BO - Get futurs users :
![BO - Get futurs users](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-list-futureusers.png)
17. GET - BO - Get specific futur user :
![BO - Get specific futur user](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-specific-futureuser.png)
18. POST - BO - Create futur user :
![BO - Create futur user](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-create-futureuser.png)
19. DELETE - BO - Delete futur user :
![BO - delete futur user](https://github.com/OphisDgn/WebFull-ProjetFinal/blob/main/images/insomnia-delete-futureuser8.png)
