const d = document;

let boton = d.querySelector('#boton__active');
let menu = d.querySelector('#menu__active')
boton.addEventListener('click', openMenu)

function openMenu(e){
		menu.classList.toggle('open-menu')
}

// git remote add origin https://github.com/ralvarezrenzo/prueba-boton.git
// git push -u origin main