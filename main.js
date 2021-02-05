// Syntaxe ES6 ou comment moderniser le JS.

// Les arrow functions

function altLog(){
    return console.log('hello');
}
const log = () => console.log('hello');
// setTimeout(log,2000);




// CONDITIONS RACCOURCIES

let user = 1;

// if(user){
//     console.log("Inscrit !");
// }

// Permet de réaliser un if si celui-ci consiste en la validation d'une condition truthy/falsy
user && console.log("Inscrit !");

/*
if(user.name){
    console.log(user.name);
}else{
    console.log("Inconnu");
}
*/

// Permet de renvoyer la première valeur truthy dans le cas d'une vérification de valeurs truthy/falsy
console.log(user.name || "Inconnu");

// MATH FLOOR - Retourner une valeur entière

Math.floor(Math.random()*50);
// Ces deux syntaxe renvoie un nombre entier entre 0 et 49
~~(Math.random()*50);

console.log(~~(Math.random()*50));// Combinaisons d'arrays
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

console.log(arr1.concat(arr2));
// Ces deux fonctions sont légérements distinctes en ce que la première crée un 3e array qui contiendra les 2, et la seconde ajoute le contenu de l'array 2 dans l'array 1;
console.log(arr1.push.apply(arr1,arr2));
console.log(arr1);

// Higher order functions : Ces fonctions servent à réorganiser les arrays de façon à harmoniser les valeurs
const consoles = [
    { maker:'Sony', model:'PS4'},
    { maker:'Sony', model:'PS5'},
    { maker:'Microsoft', model:'Xbox One'},
    { maker:'Microsoft', model:'Xbox Series X'},
    { maker:'Nintendo', model:'Switch'},
    { maker:'Nintendo', model:'Game Boy Advance'},
    { maker:'Google', model:'Stadia'},
    { maker:'SEGA', model:'Dreamcast'},
    { maker:'ATARI', model:'Jaguar'},
    null,
    null,
    undefined
];

// La fonction filter sert à filtrer (bah oui) les valeurs indésirés ou en fonction de ce que l'on souhaite. Ici filter(Boolean) va supprimer les valeurs undefined et null de notre array retourné
const sony = consoles.filter(Boolean).filter(console=>console.maker === 'Sony');
// Et le second fiter() va permettre de filtrer les consoles pour n'afficher que celles produites par Sony
console.table(sony);

// La fonction Set permet de retourner un array ne comportant pas de doublons.
const constructeur = ['Peugeot','Citroen','Lamborghini','Peugeot','Peugeot','Peugeot','Citroen'];

const cleanConstructeur = [...new Set(constructeur)]
console.table(cleanConstructeur);


const me = {
    name:"Axel",
    age:26,
    estDev:true
};
const talis = {
    type:"school",
    city:"bordeaux",
};

// L'opérateur de décomposition "..." permet de décomposer des propriétés d'un objet. On peut aussi l'utiliser pour créer des variables qui porteront le nom des propriétés.
const secondUser = {...me};

const {name,age,estDev} = me;

console.log(name,age,estDev);

// Des objets peuvent être combinés en utilisant une déclaration qui utilise l'opérateur de décomposition "..." pour les combiner.
// On se retrouve avec un objet comportant les deux objets initiaux.
const meAtTalis = {...me,...talis};

console.log(meAtTalis)


