// OBJETS EN JS
// Les objets en JS sont une collection de paires key-value. En JS TOUT ce qui n'est pas une primitive.

// Déclaration littérale
const person = {
    firstName:'John',
    lastName:'Doe'
};

// Déclaration via constructor
const chien = new Object();

// Déclaration statique
const chat = Object.create({});

// get = object.property;//Permet d'accéder à la valeur d'une propriété d'un object
// object.property = set;//Permet de définir la valeur d'une propriété d'un objet

// Méthodes pour afficher un objet
console.log(person);
console.log(person[0]);
console.log(person.lastName);
// On peut aussi utiliser la notation ["property"] pour y accéder mais ce n'est pas pratique
console.log(person["firstName"]);


let hello;
let world;

// Ancienne méthode d'initialisation d'objets
const oldObj = {
    hello:hello,
    world:world,
};


// Nouvelle méthode d'initialisation d'objets
const experience = "exp";

const newObj = {
    hello,
    world,
    [experience]:23,
};

console.log(newObj);
//Supprimer une propriété d'un objet
delete newObj.exp;

console.log(newObj);

// Comparaison, référence et identité d'un objet
const origin = {
    hello:'world',
};

// Des variables assignées à un objet sont des références à celui-ci
const x = origin;
const y = origin;

// Par conséquent ils ne sont pas égaux à un nouvel objet mais plutôt au premier objet duquel ils font référence.
console.log(x === y);
console.log(x === origin);
console.log(x === {hello: 'world'});


// En modifiant la propriété d'un objet via une variable qui le référence, on modifie aussi cette valeur chez l'objet et les autres références.
x.hello = 'hello';

console.log(x);
console.log(y);
console.log(origin);

const clone = Object.assign({},origin);

console.log(clone === origin);

clone.hello = "world";

console.log(origin.hello);
console.log(clone.hello);

// Syntaxe ES6 avec le spread operator ou opérateur de décomposition
const jumeau = {...origin,
    bonjour: 'bonjour',
    salut(){
        console.log('Salut à toi jeune entrepreneur');
    }
};

console.log(jumeau);

jumeau.salut();

const dev = {
    firstName:'Axel',
    metier :'Développeur',
    salut(){
        console.log(`Salut à toi jeune ${this.metier}`);
    }
}
console.log(dev);
dev.salut();

const game = {
    hp :100,
    log(){
        console.log(`💙${this.hp}`);
    },
    damage(){
        this.hp-=10;
        this.log();
        return this;
    },
    heal(){
        this.hp+=10;
        this.log();
        return this;
    }
}

game.damage().damage().damage().heal();


function Personnage(name){
    this.name = name;
    this.created = new Date();
    this.birthday = function(){
        console.log(this.created.toDateString());
    };

    this.sePresenter = function(){
        console.log(this.name);
    }
}

const mario = new Personnage("Mario");

console.log(mario);
mario.sePresenter();
mario.birthday();