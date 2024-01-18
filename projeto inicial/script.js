const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'foco');
    banner.setAttribute('src', '/imagens/foco.png');
    titulo.innerHTML = `Otimize sua produtividade,<br>
    <strong class="app__title-strong">mergulhar não importa.</strong>`;
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'descanso-curto');
    banner.setAttribute('src', '/imagens/descanso-curto.png');
    titulo.innerHTML = `
        Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
    `;
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-context', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png');
    titulo.innerHTML = `
        Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
    `;
});
