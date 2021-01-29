const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Entrez un nom');
  para.textContent = 'Utilisateur Actuel: ' + name;
}