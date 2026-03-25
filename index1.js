var nombreDeCarte = 52;
var nomDuJeu = "poker";
var jeu = ["poker", "huitamericain"];
var jeuTermine = false;
var jeupastermine = true;
var nombreDeJoueurs = 4;
var nombreDeJoueursMax = 6;
var score = 0;
var scoreMax = 100;
var carteEnMain = ["as de coeur", "roi de carreau", "dame de trefle"];
var carteSurLaTable = ["10 de coeur", "9 de carreau", "8 de trefle"];
var joueurActuel = "joueur1";
var tour = 1;
var estCeQueLeJoueurPeutJouer = true;
var estCeQueLeJoueurAGagne = false;
function AfficheNomDuJeu(jeu) {
    console.log("le nom du jeu est;" + jeu);
}
function jouerTour(joueur) {
    console.log(joueur + " joue son tour");
    tour++;
}
function verifierGagnant(score) {
    if (score >= scoreMax) {
        return true;
    }
    else {
        return false;
    }
}
function afficherScore(score) {
    console.log("le score actuel est:" + score);
}
function melangerCartes(cartes) {
    for (var i = cartes.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cartes[i];
        cartes[i] = cartes[j];
        cartes[j] = temp;
    }
    return cartes;
}
var carte1 = {
    nom: "trefle",
    couleur: "noir",
    type: "roi de trefle",
    valeur: "k"
};
var carte2 = {
    nom: "coeur",
    couleur: "rouge",
    type: "roi de coeur",
    valeur: "k"
};
var partie = {
    nomDuJeu: "poker",
    nombreDeCarte: 52,
    nombreDeJoueurs: 4,
    nombreDeJoueursMax: 6,
    scoreMax: 100,
    joueurs: [],
    estCeQueLeJeuTermine: false,
    dateDeDebut: new Date(),
    dateDeFin: new Date(),
    quiAGagne: null,
    variablecomposite: new Date()
};
function affficherUnMessage(message) {
    console.log(message);
}

const readline = require('readline');

function saisirNombreCarte() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Entrez le nombre de cartes : ', (valeur) => {
            const nombre = parseInt(valeur, 10);
            rl.close();
            resolve(nombre);
        });
    });
}

affficherUnMessage("jeu de cartes");
(async () => {
    const nombreCarteSaisi = await saisirNombreCarte();
    affficherUnMessage("le nombre de cartes est: " + nombreCarteSaisi);
})();
