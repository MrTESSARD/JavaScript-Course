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
    //L'instruction else permet de cibler tous les cas qui ne rentrent ni dans les if, ni dans les éventuels else if. Le cas général
}
// LES VALEURS TRUTHY (OU FALSY)

let x = true;// "hello",1 sont des primitives avec des valeurs non nulles donc considérées comme TRUTHY

let y = [];// {} sont des objets donc ils ne sont jamais 'vraiment" vides, et par conséquent considérés comme truthy;

let z = 0;//"",false,undefined,null sont des primitives sans valeurs ou ayant une valeur nulle donc falsy.

console.log(!! z);
// L'opérateur !! force la vérification d'une valeur true ou false sur l'argument suivant. C'est pourquoi il existe des valeurs truthy et falsy.


/* Conditions ternaires : "? et :"
    On utilise les conditions ternaires pour déterminer l'affectation d'une valeur à une variable en fonction d'une condition définie. Les trois arguments d'un condition ternaire sont la condition à vérifier, la valeur si vraie, la valeur si fausse
 */
let masseMoleculaire = 10;
let existence = masseMoleculaire ? "existe" : "n'existe pas";

console.log(existence);

let user = 0;

let peutRedigerUnPost = user ? "oui" : "non";

console.log(peutRedigerUnPost);

// Les conditions ternaires peuvent parfois se substituer avec des if.

let age = 21;
//let age = prompt("Quel age as tu ?")
let promptMajeur = age >= 18 ? console.log("t'es majeur") : console.log("t'es mineur"); //L'opérateur ternaire ? permet de demander une condition située à sa gauche et d'exécuter du code à sa droite puis le ":" permet de spécifier le résultat dans e cas contraire, à la manière d'un  if-else en plus court.

// OPERATEURS DE COMPARAISON
console.log(x==y);//Vérifier une égalité simple, càd la valeur;

console.log(x===y);//Vérifier une égalité stricte, autrement une identité, càd la valeur et le type;

console.log(x>y);// Vérifie la supériorité ou l'infériorité en fonction du symbole utilisé. >,<,<=,>=

console.log(x!=y)// Vérifie une inégalité simple, càd l'inégalité  des valeurs

console.log(x!==y)// Vérifie l'inégalité stricte, càd l'inégalité des valeurs et des types

// OPERATEURS LOGIQUES

let heure = 15;
let student = true;
let dev = true;

if (((heure > 8.5 && heure < 16.25) && student) || dev) {
  /*
    Avec l'opérateur ||, on demande d'exécuter l'instruction suivante
    si au moins une des deux conditions est remplies 
    mais pas nécessairement les 2.
    L'opérateur && demande la véracité des deux conditions en même temps, sinon la condition ne s'exécute pas.
    L'opérateur ! sert à inverser la condition. Donc dans le cas où il renvoie une valeur true, il renverra false et vice-versa
  */
    console.log("Au boulot !");
}else{
    console.log( "C'est pas l'heure des cours" );
}

// Nullish Coalescing Operator, ou l'opérateur de coalescence;

// Le NCO vérifie les valeurs et prends la première qui est définie, indépendamment de si elle est falsy ou non.
let animal1;
let animal2 = 0;
let insecte = animal1 ?? animal2;

console.log(insecte);

//SWITCH CONDITIONS

let arg = "2";
switch (arg) {
    case "night": //dans le cas où arg === 1
        // modifie le css pour activer le thème night
        console.log("c'est le cas n°1");
        break;
    case 2://dans le cas où arg === 2
        console.log("c'est le cas n°2");
        break;
    case 3://dans le cas où arg === 3
        console.log("c'est le cas n°3");
        break;
    default://dans les autres cas
        console.log("c'est un cas par défaut");
};