//! Intro classes

//? Déclaration d'une classe nommée User
class User {
    //? Le constructeur de la classe définit des paramètres initiaux name et surname
    constructor(name,surname) {
        //? Initialisation des name et surname en paramètre
        this.name = name;
        this.surname = surname;
    }
}
console.log(typeof User);
console.log(User);

let vide = new User();
let john = new User("John","Doe");
let cena = new User("John","Cena");
let jane = new User("Jane","Doe");

console.log(vide);
console.log(john);
console.log(cena);
console.log(jane);

