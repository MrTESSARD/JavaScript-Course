// Les conditions en JS
"use strict";
// CONDITIONS IF, ELSE IF & ELSE

let annee = 2021;
//let annee = prompt('En quelle année est-on ?',2021); // On utilise prompt() pour demander à l'utilisateur d'entrer une donnée à l'entrée sur le site.
if(annee < 2021){
    console.log("T'es dans le passé gros");
    //L'instruction if permet de demander de vérifier une condition et d'exécuter le code entre crochet si la condition est vraie
}else if(annee == 2021){
    console.log("T'as raison mek");
    //L'instruction else if permet de vérifier des conditions supplémentaires si le premier if n'est pas vérifié
}else{
    console.log("T'es dans le turfu");
    //L'instruction else permet de cibler tous les cas qui ne rentrent ni dans les if, ni dans les éventuels else if.
}

// Conditions ternaires : ? : 
let age = 21;
//let age = prompt("Quel age as tu ?")
let promptMajeur = age >= 18 ? console.log("t'es majeur") : console.log("t'es mineur"); //L'opérateur ternaire ? permet de demander une condition située à sa gauche et d'exécuter du code à sa droite puis le ":" permet de spécifier le résultat dans e cas contraire, à la manière d'un  if-else en plus court.

// OPERATEURS LOGIQUES

let heure = 12;

if (heure <  8.5 || heure >16.5 ) {
  /*
    Avec l'opérateur ||, on demande d'exécuter l'instruction suivante
    si au moins une des deux conditions est remplies 
    mais pas nécessairement les 2.
  */
    console.log( "C'est pas l'heure des cours" );
}else{
    console.log("Au boulot !");
}