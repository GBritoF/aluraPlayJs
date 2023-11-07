import { conectaAPI } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento){
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideos(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]')

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe titulos com esse termo!</h2>`
    }
}

const botaoPesquisa = document.querySelector('[data-batao-pesquisa]')

botaoPesquisa.addEventListener('click', evento => buscaVideo(evento))

