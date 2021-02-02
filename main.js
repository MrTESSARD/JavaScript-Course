// let & const

let maVariable;

console.log(maVariable);

maVariable = 1;

console.log(maVariable);

const uneConst = "Constante";

console.log(uneConst);

let number = 0;//Déclaration & affectation
number++;//Ajoute 1 à la variable number
++number;//Ajoute 1 à la variable number
number = number + 5;//Ajoute 5 à la variable number
number += 5;//Ajoute 5 à la variable number
number *= 5;//Multiplie par 5 la variable number
number /= 5;//Divise par 5 la variable number


console.log(number);

// Autres façons de log dans la console
console.error('Une erreur');
console.warn('Un avertissement');

const age = 20; // Datatype number
const temperature = 24.6; // Datatype number

console.log(typeof age);

const name = "Jean-Michel" // Datatype string
const vitesse = "200" // Datatype string

console.log(typeof vitesse);

const votreNiveauEnJs = null; //Datatype Null, mais va être affiché en tant qu'objet

console.log(typeof votreNiveauEnJs);

let indefini; // Datatype undefined

console.log(typeof indefini);

let unPlusGrandQueZero = true; //Datatype Boolean

console.log(typeof unPlusGrandQueZero);

//Il existe aussi des données de type Symbol qui servent à stocker des infos sensibles et inchangeables.

//BigInt est un type de données qui est proposé pour ES2020.
