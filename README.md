# Projet de sécurité de formulaire de contact

## Faire fonctionner le projet

- Tout d'abord il faut istaller la base de donnée:
  - Executez le script SQL dans mysql afin d'avoir la BDD 
- Ensuite il faut adapter le fichier serveur.js dans le repertoire backend:
  -  Si le port inscrit est déjà utilisé il faudra le modifier
  - Il faudra changer les paramètres de connexion à mysql à moins que vous ayez les mêmes
- Pour finir il faut lancer le backend:
  - Réalisez un "npm install" dans un terminal à la racine du projet
  - Envoyez la commande "node serveur.js" dans un terminal depuis le repertoire backend
  - Si une erreur d'authentification mysql apparait il faut executer ces deux commandes dans mysql:
    - ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; (il faut adapter user et password afin que la commande soit valide)
    - flush privileges;
- Normalement le terminal vous indique que êtes connecté à la BDD vous pouvez donc lancer le fichier formulaire.html présent dans le repertoire app, l'envoie du formulaire devrait fonctionner

