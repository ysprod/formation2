let nombreDeCartes: number= 52;
const nomDesJeux: string [] = ["poker" , "8 americain", "djemise"];
let nombreDeJoueurs: number = 4;
const enseignes:string[] = ["coeur", "carreau", "trefle", "pique"];
let jeuSelectionne: string = "djemise";
let nombresDeCartesParJoueur: number = 5;
const valeurs:string[] = ["AS",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi"];
let paquetDeCartes: any[] = [];
let cartesAPiocher: any[] = [];
let cartesdejaJouees: any[] = [];
let mainsDesJoueurs: any[][] = [];
let nbreDeFoisjouees: number = 10;
console.log ("Bienvenue dans le jeu de cartes " + jeuSelectionne);
console.log ("nombre de fois que j'ai joué est :" + nbreDeFoisjouees)
const je:string = "Voulez vous commencez le jeu? (oui/non)";
console.log(je);
function desire (message: string): void {
    console.log(message);
}
desire("je veux jouer aussi au poker");
desire("nombre de fois que j'ai joué est :" + nbreDeFoisjouees);
desire("je suis le plus mignon");
function jeuencour(): void {
}
desire("Le jeu est cour est :" + jeuSelectionne);

function jeudisponible(): void {    
    desire("Le jeu est disponible pour jouer est"); 
    const premierJeuDiponible = nomDesJeux[0];
    const deuxiemeJeuDiponible = nomDesJeux[1];
    const troisiemeJeuDiponible = nomDesJeux[2];
    desire("Le premier jeu disponible est :" + premierJeuDiponible);
    desire("Le deuxieme jeu disponible est :" + deuxiemeJeuDiponible);
    desire("Le troisieme jeu disponible est :" + troisiemeJeuDiponible);
}
jeudisponible();
