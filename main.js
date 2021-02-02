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
let numString = parseInt('18');
console.log(numString)

let binary = parseInt('101', 2);//Encodage en binaire
console.log(binary)

let numNotString = '11' + '11';// Concaténation
console.log(numNotString);

let numIsString = +'11' + +'11'; // Conversion en number avec les +
console.log(numIsString);

