import { conectaAPI } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]')

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li")
    video.className = 'videos__item';
    video.innerHTML = `<iframe width="100%" height="72%" src="https://www.youtube.com/embed/pA-EgOaF23I"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
        <p>236 mil visualizações</p>
    </div>`

    return video;
}

async function listaVideo() {
    const listaApi = await conectaAPI.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}