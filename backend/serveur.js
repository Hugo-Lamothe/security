// Importation des modules
const express = require('express');
const mysql = require('mysql');
const multer = require("multer");
const upload = multer();

// Création de l'application Express
const app = express();
const PORT = 3012;

// Configuration de la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'form_contact'
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté à la base de données MySQL');
});

// Middleware pour analyser les données de formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route pour gérer les requêtes POST du formulaire de contact
app.post('/submit', upload.none(), (req, res, next) => {
    // Récupération des données du formulaire
    const { name, email, message } = req.body;

    // Validation et nettoyage des données (à implémenter)

    // Enregistrement des données dans la base de données
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            res.status(500).send('Erreur lors de l\'enregistrement des données dans la base de données');
            throw err;
        }
        res.status(200).send('Données enregistrées avec succès');
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
