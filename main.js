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


// ARRAYS - avancés

let matrice = [
    [1,true,"non"],
    [4,5,6],
    [7,8,9],
];

console.log(matrice[2]);
//alert(matrice); //Stringify mon array en l'appellant dans un lieu où une string est nécessaire
//console.log(matrice + 1);

console.log([0] == [0]);// On ne vérifie pas l'équivalence des arrays avec une comparaison numérique car il va comparer les propriétés en bits de l'array

console.log(0==[]);//Va comparer la valeur mathématique de l'array et donc retourner 0

const exo = "JavaScript, PHP, Python, Ruby, C++, Java, C, LUA, CSS, Objective C, HTML, GoLang, PASCAL";

const langagesProgrammationArray = exo.split(", ");
// Diviser une string en un nouvel array
console.table(langagesProgrammationArray);

const balisesHTML = ["div", "p", "section", "br", "hr", "h1", "style", "script", "meta", "body"];
console.log(balisesHTML);

let mesBalisesHTMLString = balisesHTML.join(', ');
// Créer une string à partir d'un array
console.log(mesBalisesHTMLString);