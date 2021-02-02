"use strict";
// Numbers and math

let billion = 1000000000; // Notation avec tous les zéros

let altBillion = 1_000_000_000; // Notation avec des underscores pour séparer

let otherBillion = 1e9; // Notation avec des exposants

let cinqMillionsCinq = 5.5e6;//Notations d'un nombre plus précis avec un exposant

let milliseconds = 0.001;// Notation avec des chiffres décimaux

let altMs = 1e-3; //Notation pour les chiffres décimaux avec exposants

let a = 0xff; //255
let b = 0b11111111; //255
let c = 0o377;//255
//console.log(a == b);

let num = 255; // Stringify un chiffre en fonction d'une base de bits
//console.log(num.toString(16));

//console.log(125.25.toString(16)); // On utilise 2 points pour chaîner un nombre et une méthode

// Opérateurs et Méthodes Math
console.log("La réponse est " + 42); // + crée une concaténation
console.log(42 + ' est la réponse'); // dans l'autre sens aussi

console.log("25"-2);// Mais les autres opérateurs font le calcul

// Récupérer un number depuis une string
let numString1 = parseInt('1800.5');
console.log(numString1);
let numString2 = parseFloat('1800.525');
console.log(numString2);

let binary = parseInt('101', 2);//Encodage en binaire
console.log(binary)

let numNotString = '11' + '11';// Concaténation
console.log(numNotString);

let numIsString = +'11' + +'11'; // Conversion en number avec les +
console.log(numIsString);

// Math

//Arrondi à l'inférieur
let floor1 = Math.floor(3.5);//3
let floor2 = Math.floor(3.9);//3
let floor3 = Math.floor(-1.1);//-2

//Arrondi à l'excès
let ceil1 = Math.ceil(3.5);//4
let ceil2 = Math.ceil(3.1);//4
let ceil3 = Math.ceil(-1.1);//-1

//Arrondi juste
let round1 = Math.round(3.5);//4
let round2 = Math.round(3.1);//3
let round3 = Math.round(-1.1);//-1

//Troncature [PAS SUPPORTE PAR IE]
let trunc1 = Math.trunc(3.1)//3
let trunc2 = Math.trunc(5.2)//5
let trunc3 = Math.trunc(4.99)//4

let random1 = Math.random();// Un chiffre aléatoire entre 0 et 1 [non inclus]
console.log(random1);

let max = Math.max(3,5,10,-1,-15);// Valeur la plus grande parmi les chiffres

let min = Math.min(3,5,10,-1,-15);// Valeur la plus petite parmi les chiffres




//Calcul imprécis
console.log(1e500);//c'est l'infini selon JS

console.log(0.1+0.2);//0.30000000000000004

console.log(0.1.toFixed(20));//0.10000000000000000555

console.log(NaN === NaN);//false