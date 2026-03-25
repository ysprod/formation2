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
        // swap only if both indices are valid
        if (typeof cartes[i] !== 'undefined' && typeof cartes[j] !== 'undefined') {
            var temp = cartes[i];
            cartes[i] = cartes[j];
            cartes[j] = temp;
        }
    }
    return cartes;
}
