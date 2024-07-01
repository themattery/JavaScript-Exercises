import flags from './model/flags.js';

// Acessando o elemento main
const main_html = document.querySelector("main")

// Iterando lista de bandeiras e criando
// estrutura html pra cada
for (const flag of flags) {
  const flag_html = `<div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      </div>`

  // Adicionando a bandeira ao elemento main
  main_html.innerHTML += flag_html
}

