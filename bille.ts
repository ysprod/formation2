const  nombreDeBilles:number =10;
let nombreJoueur:number = 0;
let couleurBille:string = "rouge";
let nombreDeBilleParPersonne:number = 1;
let nomDuJeu:string = "rond";
let nombreDeBilleAmiSer:number = 0;
let nombreDeBilleGagneParJoueur:number = 0;
let nombreDeBilleGagneParUnJoueur:number = 0;
//let formedesbilles:any=null;
let formeDesBilles:string[] = ["rond", "carré", "triangle"];
function ecrireMessage(message: string): void {
    console.log(message);
}


function afficherNommbredebillequejai(nombre: number): void {
ecrireMessage("Nombre de billes que j'ai : " + nombre);
}

function afficherlenombredebillequejai2():void{
ecrireMessage("le nombre est:" + nombreDeBilles);
}

function afficherNommbredebillequejaiautrement(): void {
ecrireMessage("Nombre de billes que j'ai : " + nombreDeBilles);
}
/**
 * Affiche la liste des formes des billes.
 * 
 * @example
 * afficheFormedesbilles();
 */
function afficheFormedesbilles(): void {
    ecrireMessage("Forme des billes :");
    const premeierforme = formeDesBilles[0];
const deuxiemeforme = formeDesBilles[1];
    const troisiemeforme = formeDesBilles[2];
    ecrireMessage("1. " + premeierforme);
    ecrireMessage("2. " + deuxiemeforme);
    ecrireMessage("3. " + troisiemeforme);
}

function nombreDeformesdebilles(): number {
    return formeDesBilles.length;
}

function afficheNombreDeformesdebilles(): void {
    const nombredeformesdebilles = nombreDeformesdebilles();
    ecrireMessage("Nombre de formes de billes : " + nombredeformesdebilles);
}


console.log("JEUX DE BILLES");
ecrireMessage("Bienvenue dans le jeux de billes");
ecrireMessage("Le but du jeux est de gagner le plus de billes possible");
ecrireMessage("Le joueur qui gagne le plus de billes gagne la partie");
ecrireMessage("Le joueur qui perd le plus de billes perd la partie");
ecrireMessage("Le joueur qui a le plus de billes à la fin de la partie gagne la partie");


afficheFormedesbilles();
afficherNommbredebillequejai(5);
afficherlenombredebillequejai2();
afficherNommbredebillequejaiautrement();
nombreDeformesdebilles();
afficheNombreDeformesdebilles();

interface billes {
    couleur :string;
    taille:string;
    matiére:string;
}

interface joueur{
    nom:string;
    scort:number;
    sacDeBilles: billes[];

}

interface partieDeBille{
   idPartie: string;
    joueurs: joueur[];
    regleDuJeu: "poursuite" | "triangle" | "trou";
    estTerminee: boolean; 
}

interface Arbitre {
    nom: string;
    verifierTricherie(joueur: joueur): boolean;
    donnerPoint(joueur: joueur, points: number): void;
    lancerPartie(): void;
}

interface ConfigurationJeu {
    nbJoueursMax: number;
    tempsLimiteMinutes?: number; // Optionnel
    terrain: "sable" | "beton" | "herbe";
    billesInterdites: string[]; // Liste de matières interdites
}

interface ActionJeu {
    tourNumero: number;
    joueurPseudo: string;
    billesGagnees: number;
    billesPerdues: number;
    horodatage: Date; // Pour savoir à quelle heure précise c'est arrivé
}

interface Obstacle {
    type: "trou" | "bosse" | "caillou";
    positionX: number;
    positionY: number;
    diametre: number;
}

interface TerrainDeJeu {
    nom: string;
    longueur: number; // en centimètres
    largeur: number;  // en centimètres
    revêtement: "sable" | "terre" | "béton";
    obstacles: Obstacle[]; // Un tableau d'objets "Obstacle"
    estEnExterieur: boolean;
}

class RobotJoueur {
    nom: string= "";
    scort: number=0;
    sacDeBilles: billes[]= [];
    tempsdejeu: number = 0; // En secondes
    estcequilagagne: boolean = false;

    constructor(nom: string) {
        this.nom = nom;
        this.scort = 0;
        this.sacDeBilles = [];
    }

    ecrireMessage(message: string): void {
        console.log(message);
    
    }

    avancer(temps: number): void {
        this.tempsdejeu += temps;
        this.ecrireMessage(`Robot ${this.nom} avance pendant ${temps} secondes. Temps total de jeu: ${this.tempsdejeu} secondes.`);
    }


    ramaserBille(bille: billes): void {
        this.sacDeBilles.push(bille);
        this.ecrireMessage(`Robot ${this.nom} a ramassé une bille de couleur ${bille.couleur}.`);
    }

    donnelescores(points: number): void {
        this.scort += points;
        this.ecrireMessage(`Robot ${this.nom} a gagné ${points} points. Score total: ${this.scort}.`);
    }

    agagnaeunepartie(): void {
        this.estcequilagagne = true;
        this.ecrireMessage(`Robot ${this.nom} a gagné la partie!`);
    }

    affichegagnant(): void {
        if (this.estcequilagagne) {
            this.ecrireMessage(`Le gagnant est: ${this.nom} avec un score de ${this.scort} points!`);    
        } else {
            this.ecrireMessage(`Le robot ${this.nom} n'a pas gagné la partie.`);
        }
    
    }

    affichetypedejeu(): void {
        this.ecrireMessage(`Le type de jeu est: ${nomDuJeu}`);
    }

    jouerTour(): ActionJeu {
        // Simule un tour de jeu automatique
        const billesGagnees = Math.floor(Math.random() * 3); // 0 à 2 billes gagnées
        const billesPerdues = Math.floor(Math.random() * 2); // 0 ou 1 bille perdue
        this.scort += billesGagnees - billesPerdues;
        return {
            tourNumero: 1, // À adapter selon la partie
            joueurPseudo: this.nom,
            billesGagnees,
            billesPerdues,
            horodatage: new Date()
        };
    }

    ajouterBille(bille: billes) {
        this.sacDeBilles.push(bille);
    }

    afficherEtat() {
        ecrireMessage(`Robot ${this.nom} - Score: ${this.scort}, Billes: ${this.sacDeBilles.length}`);
    }
}


let robotama:RobotJoueur = new RobotJoueur("AMA");
let robotoswald:RobotJoueur = new RobotJoueur("OSWALD");
robotama.ecrireMessage("Bienvenue dans le jeu de billes, je suis le robot " + robotama.nom);
robotama.avancer(5);
robotama.ramaserBille({ couleur: "rouge", taille: "petite", matiére: "verre" });  
robotama.donnelescores(10);
robotama.agagnaeunepartie();
robotama.affichegagnant();
robotama.affichetypedejeu();

