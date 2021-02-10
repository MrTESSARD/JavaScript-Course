//! Intro classes

//? Déclaration d'une classe nommée User
class User {
    //? Le constructeur de la classe définit des paramètres initiaux name et surname
    constructor(name,surname) {
        //? Initialisation des name et surname en paramètre
        this.name = name;
        this.surname = surname;
    }

    get name () { return this._name; }

    set name (value) {
        if(value.length < 3){
            console.log(`Name : ${value} is too short`);
            return;
        }
        this._name = value;
    }

    salut() {
        console.log(`Salut ! Je suis ${this.name}`);
    }
}

