// Initialisation du projet. Ajout de variables de sélection
const addButton = document.querySelector('.btn-add');
const userList = document.querySelector('#userlist');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const li = document.createElement('li');
li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//! Evenements JS pour ajouter des éléments.
//? addEventListener permet d'initialiser un gestionnaire d'évènements. L'évènement est le premier argument de la méthode et le second argument est le callback
addButton.addEventListener('click',(e) =>{
    //? preventDefault va servir à annuler le comportement par défaut d'un élément (par exemple la redirection http d'un bouton submit)
    e.preventDefault();
    const li = document.createElement('li');
    li.className = "user";
    //? AppendChild permet de rajouter du texte à notre élément nouvellement crée !!! ATTENTION IL N'EST PAS ENCORE AJOUTE A LA PAGE !!!
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    //? Cet appendChild permet de le rajouter à la suite d'un élément qui lui existe sur la page HTML donc, va lui permet d'exister sur la page HTML lui aussi
    if(userList.appendChild(li)){
        //? On utilise .value = '' pour vider les champs de leur contenu
        nameInput.value = '';
        emailInput.value = '';
    }
});