
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

interface Carte {
    nom: string;
    couleur: string;
    type: string;
    valeur: string | number;

}



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




let carte1: Carte = {
    nom: "trefle",
    couleur: "noir",
    type: "roi de trefle",
    valeur: "k"
}

let carte2: Carte = {
    nom: "coeur",
    couleur: "rouge",
    type: "roi de coeur",
    valeur: "k"
}

let partie: UnePartie = {
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
}

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
        const temp: string = cartes[i]!;
        cartes[i] = cartes[j]!;
        cartes[j] = temp;

    }
    return cartes;
}



function affficherUnMessage(message:string):void{
    console.log(message);
}

function saisirNombreCarte(): number {
    const valeursaisie = prompt('Entrez le nombre de cartes :');
    const nombrerecuper = parseInt(valeursaisie || '0', 10);
    return nombrerecuper;
}



  function NomDeCarteEnmain(): string {
    const valeursaisie = prompt('Entrez le nom de carte en main :');
    return valeursaisie || 'Aucune carte en main';
}


affficherUnMessage("jeu de cartes");
let nombreCarteSaisi = saisirNombreCarte();
affficherUnMessage("le nombre de cartes est: " + nombreCarteSaisi);
 
let nomCarteEnmain = NomDeCarteEnmain();
affficherUnMessage("le nom de carte en main est: " + nomCarteEnmain);

