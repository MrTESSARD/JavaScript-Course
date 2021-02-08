//! Console appliquée au DOM : window étant l'élément le plus haut de la chaîne du DOM
console.log(document)

//! Sélection des éléments.
// *** -- Ancienne -- ***
// var title = document.getElementById('#');
// console.log(document.getElementById('#dom-title'));
// document.getElementById('#name');
// document.getElementsByClassName('.btn-add');
// document.getElementsByTagName('body');

// *** -- Nouvelle méthode -- ***
// document.querySelector('.btn-add');
// document.querySelector('#dom-title');
const myDiv = document.querySelector('div');
// *** */ Sélection multiple avec querySelectorAll

const divs = document.querySelectorAll('div');
// console.log(divs);
// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// ? FONCTION FLECHEE APPLIQUEE A NOTRE NODELIST
//divs.forEach((div) => console.log(div));

// *** Sélection par parenté ***

myDiv.firstElementChild;
myDiv.lastElementChild;
myDiv.ParentNode;
myDiv.ChildNode;
// divs.children[1];

//! Manipulation du DOM

// Pour manipuler le DOM il faut d'abord viser un élément puis lui affecter le changement à réaliser

// *** Suppression avec la méthode remove(), ***
// myDiv.remove();
//divs[0].lastElementChild.remove();

// *** Edition du contenu ***

const myTitle = document.querySelector('.title');
//? On utilise textContent pour modifier le contenu textuel d'une balise
myTitle.firstElementChild.textContent = "Hello !";
myTitle.firstElementChild.innerText = "Hello !";
//? On utilise innerHTML pour modifier le contenu HTML d'une balise
// myTitle.innerHTML = "<h1>BONJOUR !</h1>";
h1 = document.querySelector("#dom-title")
//? On utilise la propriété style pour modifier le CSS d'un élément.
// myTitle.style.background = 'red';

// *** Ajout d'éléments ***
const newDiv = document.createElement("div");
newDiv.className="hello-div";
newDiv.id = "hello";
newDiv.setAttribute("title", "Hello title!");
let newDivText = document.createTextNode("Hello there !");
newDiv.appendChild(newDivText);
myTitle.insertBefore(newDiv,h1);
console.log(newDiv);


const userList = document.querySelector('#userlist');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const li = document.createElement('li');
li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
console.log(li);
