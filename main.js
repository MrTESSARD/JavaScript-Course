const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Entrez un nom');
  para.textContent = 'Utilisateur Actuel: ' + name;
}