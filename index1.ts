let nombreDeCarte: number = 52;
let nomDuJeu: string = "poker";
const jeu: string[] = ["poker", "huitamericain"];
let jeuTermine: boolean = false;
let jeupastermine: boolean = true;
let nombreDeJoueurs: number = 4;
let nombreDeJoueursMax: number = 6;
let score: number = 0;
let scoreMax: number = 100;

let carteEnMain: string[] = ["as de coeur", "roi de carreau", "dame de trefle"];
let carteSurLaTable: string[] = ["10 de coeur", "9 de carreau", "8 de trefle"];

let joueurActuel: string = "joueur1";
let tour: number = 1;

let estCeQueLeJoueurPeutJouer: boolean = true;
let estCeQueLeJoueurAGagne: boolean = false;

function AfficheNomDuJeu(jeu: string): void {
    console.log("le nom du jeu est;" + jeu);

}



function jouerTour(joueur: string): void {
    console.log(joueur + " joue son tour");
    tour++;
}

function verifierGagnant(score: number): boolean {
    if (score >= scoreMax) {
        return true;
    } else {
        return false;
    }
}

function afficherScore(score: number): void {
    console.log("le score actuel est:" + score);
}


function melangerCartes(cartes: string[]): string[] {
    for (let i = cartes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // swap only if both indices are valid
        if (typeof cartes[i] !== 'undefined' && typeof cartes[j] !== 'undefined') {
            const temp: string = cartes[i]!;
            cartes[i] = cartes[j]!;
            cartes[j] = temp;
        }
    }
    return cartes;
}




interface Joueur {
    nom: string;
    score: number;
    cartesEnMain: string[];
    cartesSurLaTable: string[];
    estCeQueLeJoueurPeutJouer: boolean;
    tour: number;
    estCeQueLeJoueurAGagne: boolean;
}
interface UnePartie {
    nomDuJeu: string;
    nombreDeCarte: number;
    nombreDeJoueurs: number;
    nombreDeJoueursMax: number;
    scoreMax: number;
    joueurs: Joueur[];
    estCeQueLeJeuTermine: boolean;
    dateDeDebut: Date | string;
    dateDeFin: Date | string;
    quiAGagne: string | null;
    variablecomposite: string | Date | number | boolean
}


