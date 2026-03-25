function saisirNombreCarte() {
    const input = prompt('Entrez le nombre de cartes :');
    const nombre = parseInt(input, 10);
    return nombre;
}

// Exemple d'utilisation :
// const nombre = saisirNombreCarte();
// console.log('Nombre de cartes saisi :', nombre);
