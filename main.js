// Arrays

// Ancienne méthode de création d'un array

var array = new Array(1, 2, 3, 4, 5, 6, true, 'tout');

// Nouvelle méthode
const fruits = [
    'pommes',
    'poires',
    'fraises',
    'framboises',
];

fruits.push('Melon'); //Ajout d'un élément dans l'array avec la méthode push

fruits[4] = "Citron"; //Ajout/Remplacement d'un élément dans l'array avec son index

fruits.unshift('Abricots'); //Ajout d'un élément dans l'array à la première place

let suppFin = fruits.pop(); //Suppression de l'élément à la fin de l'array
let suppDebut = fruits.shift(); //Suppression de l'élément au début de l'array
let suppIndex = fruits.splice(0,1); // Suppression de 1 élément à la position 0de l'array

//console.log(suppIndex);

let copyFruits = fruits.slice();

console.log(copyFruits);
// Propriétés de l'array

console.log(fruits.length) // Changer la longueur de l'array (supprimera le reste si il y en a plus que la longueur demandée)

//let isIt = Array.isArray(fruits); Vérifier si un élément est un array, renvoie true ou false
console.table(fruits);
