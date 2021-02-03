// Les conditions en JS
"use strict";
// CONDITIONS IF, ELSE IF & ELSE


let annee = prompt('En quelle année est-on ?',2021); // On utilise prompt() pour demander à l'utilisateur d'entrer une donnée à l'entrée sur le site.
if(annee < 2021){
    alert("T'es dans le passé gros");//L'instruction if permet de demander de vérifier une condition et d'exécuter le code entre crochet si la condition est vraie
}else if(annee === 2021){
    alert("T'as raison mek");//L'instruction else if permet de vérifier des conditions supplémentaires si le premier if n'est pas vérifié
}else{
    alert("T'es dans le turfu")//L'instruction else permet de cibler tous les cas qui ne rentrent ni dans les if, ni dans les éventuels else if.
}

// Conditions ternaires : ? : 
let age = prompt("Quel age as tu ?")
let promptMajeur = age >= 18 ? alert("t'es majeur") : alert("t'es mineur"); //L'opérateur ternaire ? permet de demander une condition située à sa gauche et d'exécuter du code à sa droite puis le ":" permet de spécifier le résultat dans e cas contraire, à la manière d'un  if-else en plus court.

// OPERATEURS LOGIQUES

let heure = prompt('Quelle heure est-il ?');

if (heure <  8.5 || heure >16.5 ) {
    alert( "C'est pas l'heure des cours" );
}else{
    alert("Au boulot !");
}
