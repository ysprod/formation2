var nombreDeCartes = 52;
var nomDesJeux = ["poker", "8 americain", "djemise"];
var nombreDeJoueurs = 4;
var enseignes = ["coeur", "carreau", "trefle", "pique"];
var jeuSelectionne = "djemise";
var nombresDeCartesParJoueur = 5;
var valeurs = ["AS", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi"];
var paquetDeCartes = [];
var cartesAPiocher = [];
var cartesdejaJouees = [];
var mainsDesJoueurs = [];
var nbreDeFoisjouees = 10;
console.log("Bienvenue dans le jeu de cartes " + jeuSelectionne);
console.log("nombre de fois que j'ai joué est :" + nbreDeFoisjouees);
var je = "Voulez vous commencez le jeu? (oui/non)";
console.log(je);
function desire(message) {
    console.log(message);
}
desire("je veux jouer aussi au poker");
desire("nombre de fois que j'ai joué est :" + nbreDeFoisjouees);
desire("je suis le plus mignon");
function jeuencour() {
}
desire("Le jeu est cour est :" + jeuSelectionne);
function jeuxDisponibles() {
    desire("Les jeux disponibles sont:");
    var premierJeu = nomDesJeux[0];
    var deuxiemeJeu = nomDesJeux[1];
    var troisiemeJeu = nomDesJeux[2];
    desire("1. " + premierJeu);
    desire("2. " + deuxiemeJeu);
    desire("3. " + troisiemeJeu);
}
;
jeuxDisponibles();
