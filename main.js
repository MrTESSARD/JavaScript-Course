"use strict";
// String and string functions
let maVar1 = "Hello World!"; // Double quotes
let maVar2 = 'Hello World! \n j\'ai hate'; // Single quotes
let maVar3 = `Hello World! ${maVar1} ${2+2}`; // Backticks autorisent les variables et le retour à la ligne
let listeDeCourses = `Items:
* Lait
* 15
* URL c:\\programfiles\\images\\small
* ${maVar1}
* \u{1F600}
* j\'ai hate
* ${'frite'}
`;// Variables et échappement de caractères spéciaux avec un backslash \

console.log(listeDeCourses)

// propriétés de strings

console.log(maVar1.length)// la longueur d'une chaîne de caractères

console.log(maVar1[0]);// l'index(la place) d'un caractère dans une chaîne
console.log(maVar1.charAt(0));// l'index d'un caractère dans une chaîne

console.log(maVar1[maVar1.length - 1]);// Le dernier caractère

const tags = "javascript, tech, es6, debutant, dev";

console.log(tags.split(', ')); // segmenter une chaîne de caractère à partir d'un critère

/*
for(let char of "Hello"){
    console.log(char);
}
*/

console.log(maVar1.substring(0,5)); // Permet de récupérer une partie d'une chaîne de caractères.
console.log(maVar1.substring(0,5).toUpperCase().toLowerCase()); //
console.log(listeDeCourses.indexOf('Lait'));// Permet de récupérer l'index d'un "mot" dans une chaîne de caractères
console.log(maVar1.substring(0,maVar1.indexOf(' '))); // Permet de récupérer une partie d'une chaîne de caractères à partir de l'index d'un mot/caractère dans une chaîne de caractères

console.log('A' > 'Z'); // On peut comparer les chaînes de caractères
console.log('Österreich' > 'Zealand');

console.log("z".codePointAt(0));// Afficher la valeur unicode d'une string

