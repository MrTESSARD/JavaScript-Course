// let & const

let maVariable;

console.log(maVariable);

maVariable = 1;

console.log(maVariable);

const uneConst = "Constante";

console.log(uneConst);

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
