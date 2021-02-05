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

// On peut cloner un objet en utilisant la méthode de déclaration statique et en passant en second argument l'objet depuis lequel on doit cloner les propriétés.

const clone = Object.assign({},origin);

// Une fois cloné, le nouvelle objet n'est plus une référence mais toutes ses propriétés et ses valeurs seront identiques.
console.log(clone === origin);

// Ici contrairement aux variables qui référencent l'objet origin, on peut modifier l'objet cloné sans affecter l'objet origin
clone.hello = "world";

console.log(origin.hello);
console.log(clone.hello);

// Syntaxe ES6 avec le spread operator ou opérateur de décomposition
const jumeau = {...origin,
    bonjour: 'bonjour',
    // Déclaration d'une méthode de l'objet, c'est à dire une fonction propre à l'objet. Cette méthode ne peut être lancée qu'en référence à l'objet qui possède cette méthode. Son scope est considéré comme local donc toutes les variables à l'intérieur seront locales et il ne pourra pas être appelé de lui-même sans l'objet. Plusieurs objets différents pourront avoir la méthode qui a le même nom puisque son scope est local (C'est toutefois une mauvaise pratique, à moins que cetlle-ci ne fasse la même chose ref : Ninja Code)
    salut(){
        console.log('Salut à toi jeune entrepreneur');
    }
};

console.log(jumeau);

jumeau.salut();


const dev = {
    firstName:'Axel',
    metier :'Développeur',
    // Ici on déclare une méthode du même nom que la méthode d'avant, mais cette fois-ci elle récupère une propriété par le biais d'un ${this}
    salut(){
        console.log(`Salut à toi jeune ${this.metier}`);
    }
}
console.log(dev);
dev.salut();

// Ici on crée un objet game, sur lequel on voudra faire du chaînage de méthode
const game = {
    hp :100,
    log(){
        console.log(`💙${this.hp}`);
    },
    damage(){
        this.hp-=10;
        this.log();
        // CE RETURN THIS EST IMPERATIF POUR LE CHAINAGE, SANS CELUI-CI CELA REVIENDRAIT A DEMANDER L'EXECUTION DE LA FONCTION DAMAGE() A L'INTERIEUR DELA FONCTION DAMAGE(), OR IL N'Y EN A PAS
        return this;
    },
    heal(){
        this.hp+=10;
        this.log();
        return this;
    }
}

// Chaînage de méthode avec l'appel successif aux méthodes
game.damage().damage().damage().heal();


// On utilise une fonction constructor qui va décrire la façon de créer un objet par cette fonction.
// Les objets crées avec cette fonction auront les même propriétés de base, mais aussi les même méthodes.
function Personnage(name){
    this.name = name;
    // Utilisation d'un objet Date pour afficher la date
    this.created = new Date();
    this.birthday = function(){
        // Formatage de l'objet Date avec toDateString pour afficher la date sous forme de chaîne de caractères.
        console.log(this.created.toDateString());
    };

    this.sePresenter = function(){
        console.log(this.name);
    }
}

// On crée un objet avec la syntaxe new puis le nom de la fonction constructor.

const mario = new Personnage("Mario");

//Ici le nouveau Personnage possède les mêmes propriétés que celle définies au départ dans la fonction constructor
console.log(mario);
mario.sePresenter();
mario.birthday();