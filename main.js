// FUNCTIONS
/* Les fonctions et leur utilité reposent sur deux principes
    DRY & WET :
    Don't Repeat Yourself : Si dans mon édition de code, je me retrouve à coder plusieurs fois la même chose. Il y a de fortes chances qu'une function suffise pour accélerer mon travail.
    Write Everything Twice, but not thrice : Vous pouvez écrire tout 2 fois, mais pas 3. C'est le principe de vous imposer des limites dans la répétition.
*/

// Une fonction possède généralement un nom, des arguments (ou pas), et un body.

// Le nom de la fonction sert à la rappeler par la suite

// Les arguments servent à renseigner les valeurs/le type de valeurs qui sont attendus dans la fonction

// Le body renseigne sur les instructions à exécuter un efois la fonction appelée

// Forme déclarative et expressions : Les déclarations possèdent du hoisting que les expressions n'ont pas. On utilise généralement les expressions pour des fonctions anonymes à executer immédiatement (IIFE)

// FORME DECLARATIVE
function addition(a,b){// déclaration avec le mot-clé function suivi de son nom et entre parenthèses son/ses arguments facultatifs. Ensuite vient le body de votre function qui va exécuter un ensemble d'instructions.
    return a + b;
}

// FORME EXPRESSIVE
const spelling = function(phrase="TALIS"){
    return phrase.split("");
};

console.log(addition(1,2));
console.log(addition(4,5));

const prixDesCourses = addition(15,5);
console.log(addition(2,5));
console.log(spelling());

console.log(prixDesCourses)

let test = 3;

// Les fonctions pures sont des fonctions qui ne reposent que sur leurs propres arguments et valeurs. Qui ne produit pas d'effets secondaires.

// Scope d'une fonction

let global = 5;

function displayGlobal(){

    return global;
}
function displayLocal(){
    let local = "local";
    return local;
}

console.log(global);//5
console.log(displayGlobal());//5
// console.log(local); // "local" si c'est une var, undefined autrement
console.log(displayLocal()); // "local"

// Les function recursives s'appellent elles-mêmes à l'intérieur d'elle-même
function recursive(){
    global++;
    console.log(global);
    if(global>5000){
        return console.log("C'est fini");
    }
    return recursive();
}

// recursive();