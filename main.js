// EXERCICES SUR LES FUNCTIONS

function compteurVoyelles(string){
    // Initialiser mon compteur
    let compteur = 0;
    // DECLARER LES VOYELLES
    // let splitVoyelles = "aeiouy".split('');
    const voyelles = ["a","e","i","o","u","y"];
    // BOUCLE FOR POUR VERIFIER
    lowerString = string.toLowerCase();
    for (let carac of lowerString){
        if(voyelles.includes(carac)){
            //LA LETTRE EST UNE VOYELLE
            compteur++;
        }
    }
    return compteur;
};

function pairImpair(a){
    return !(a%2);
}

// ENONCE : A PARTIR DE L'ARRAY SUIVANT, FAIRE UNE FONCTION QUI CREE UNE SIMULATION DE COMBAT EN CHOISISSANT ALEATOIRE DEUX COMBATTANTS ET QUI RETOURNE UN PHRASE DU TYPE A vs B

function vs(){
    const fighter = ["Ryu", "Ken", "Chun-Li", "Goku", "Vegeta", "Beerus", "Heihachi","Jin","Connor McGregor", "Dhalsim", "Blanka", "Khabib", "John Cena", "The Rock"];
}


console.log(pairImpair(2))

console.log(compteurVoyelles("pascal"));
console.log(compteurVoyelles("carolane"));
