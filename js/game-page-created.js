const $header = document.querySelector('header');
const $containerCartas = document.querySelector('.container-cartas');
const $h1InfosNaTela = document.querySelector('.h1');
const $h2InfosNaTela = document.querySelector('.h2');
const $infosNaTela = document.querySelector('.infos-na-tela');
const $audio = document.getElementById("musica");
const $audioMatch = document.getElementById("som-match");
const $audioWin = document.getElementById("som-win");
const $audioLetsGo = document.getElementById("som-letsgo");

$audio.volume = 0.5;

let mm = 0;
let ss = 0;
let ms = 0;
let cron;
let tempo = 16.666;//tempo em milisegundos
let paresEncontrados = 0;

/**
 * Contagem regressiva 3,2,1.
 */
function contador (){
    $infosNaTela.style.display='block';
    setTimeout(()=>{
        $h1InfosNaTela.innerHTML='3'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 1000)
    setTimeout(()=>{
        $h1InfosNaTela.innerHTML='2'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 2000)
    setTimeout(()=>{
        $audio.volume=0;
        $h1InfosNaTela.innerHTML='1'
        $audioMatch.play()
        $audioMatch.volume=.3;
    }, 3000)
    setTimeout(()=>{
        $audioLetsGo.play()
        $audioLetsGo.volume=.3;      
    }, 3100)  
}

/**
 * inicializa o jogo quando invocada.
 */
function start() {
    const $modal = document.querySelector('.modal');
    $modal.style.display='none';
    $modal.disabled='true';
    contador();
    setTimeout(()=>{
        $h1InfosNaTela.style.display='none';
        $infosNaTela.style.display='none';
    cron = setInterval(() => { timer(); }, tempo)
    document.getElementById("btniniciar").style.display = "none"
    $audio.play();
    $audio.volume = .6;
    document.getElementById("btnreiniciar").style.display = "block"},4000)
}

/**
 * Inicia uma nova partida.
 */
function recomecar() {
    location.reload()
}
/**
 * Pausa o cronômetro do jogo.
 */
function pausar() {
    clearInterval(cron);

}
/**
 * Cronômetro do jogo.
 */
function timer() {
    ms++;
    if (ms == 60) {
        ms = 0;
        ss++;
        if (ss == 60) {
            ss = 0;
            mm++;
        }
    }
    let formato = "Tempo : " + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss) + ":" + (ms < 10 ? "0" + ms : ms)
    document.getElementById("Iniciar").innerText = formato
}

$header.insertAdjacentHTML("beforeend", `
    <h6 id="Iniciar">Tempo : 00:00:00</h6>
    <h6 class='pares-encontrados'>Pares encontrados: ${paresEncontrados}/6</h6>
`);

//seta a música de fundo da página de jogos
// let numberRandom = Math.floor(Math.random()*5)
// switch(numberRandom){
//     case 0: $audio.src='../audio/One Piece - We Are! 8-Bit .mp3';
//     break;
//     case 1: $audio.src='../audio/The Avengers [8 Bit Tribute to Alan Silvestri & The Avengers].mp3'
//     break;
//     case 2: $audio.src='../audio/Zelda Link to the Past - Hyrule Field (Gameboy 8-bit)_50k.mp3'
//     break;
//     case 3: $audio.src='../audio/Super Mario Bros Theme Song .mp3'
//     break;
//     case 4: $audio.src='../audio/Kirby s Return to Dream Land Title Theme 8 Bit Remix_50k.mp3'
//     break;
// }

//Array com as cartas criadas pelo usuário.
let storagelistaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"));

/**
 * Embaralha os elementos de um array.
 * @param {Array} i
 */
const embaralharCartas = (arr) => {
    let novoArray = [];
    while (novoArray.length !== arr.length) {
        let i = Math.floor(Math.random() * arr.length);
        novoArray.indexOf(arr[i]) < 0 ? novoArray.push(arr[i]) : '';
    };
    return novoArray;
};

storagelistaDeCartas = embaralharCartas(storagelistaDeCartas);



for (let i = 0; i < storagelistaDeCartas.length; i++) {
    storagelistaDeCartas[i].id = `carta${i}` //adiciona o id das cartas dinamicamente.
    $containerCartas.insertAdjacentHTML('beforeend', //adiciona as cartas na tela.
        `
        <div class='cartas' id=${storagelistaDeCartas[i].id}>
            <div class='div-frente-verso front'>
                <img class='img-cartas' src='../imgs/${storagelistaDeCartas[i].url}' alt="">
            </div>
            <div class='div-frente-verso back'>
                <div class='img-cartas div-frente-verso'></div>
            </div>
        </div>
    `)
}

let arrayDuasCartas = [];

//adiciona um evento de click às cartas que adiciona/remove a classe flip aos elementos que possuem a classe "div-frente-verso"
for (let i = 0; i < storagelistaDeCartas.length; i++) {

    document.querySelector("#carta" + i).addEventListener('click', function () {
        let faces = this.getElementsByClassName('div-frente-verso')
        if (faces[0].classList.contains('flip') && faces[1].classList.contains('flip')) {
            return
        } else {
            faces[0].classList.toggle('flip');
            faces[1].classList.toggle('flip');

            document.querySelector('.section-descricao').innerHTML =
                `
            <img class='img-descricao'
            src="../imgs/${storagelistaDeCartas[i].url}"
            alt="">
            <div>
                <h3>${storagelistaDeCartas[i].titulo}<h3>
                <p>${storagelistaDeCartas[i].descricao}</p>                
            </div>
            `
            verificaPar(i)
        }
    }
    )
}


/**
 * Verifica se os pares de cartas escolhidos pelo usuário são iguais ou não. Verifica também se todos os pares foram encontrados.
 * @param {int} i
 */
function verificaPar(i) {
    arrayDuasCartas.length == 2 ? arrayDuasCartas = [] : '';

    if (arrayDuasCartas.length == 0) {
        arrayDuasCartas.push(storagelistaDeCartas[i])
        console.log(arrayDuasCartas)
    } else if (arrayDuasCartas.length == 1) {
        arrayDuasCartas.push(storagelistaDeCartas[i])
        let idElemento1 = `#${arrayDuasCartas[0].id}`;
        let idElemento2 = `#${arrayDuasCartas[1].id}`;
        let faceElemento1 = document.querySelector(idElemento1).getElementsByClassName('div-frente-verso');
        let faceElemento2 = document.querySelector(idElemento2).getElementsByClassName('div-frente-verso');
        if ((arrayDuasCartas[0].url.split('.'))[arrayDuasCartas[0].url.split('.').length-2] == (arrayDuasCartas[1].url.split('.'))[arrayDuasCartas[1].url.split('.').length-2]) {
            $audioMatch.play()
            $audioMatch.volume=.15;
            faceElemento1[0].style.opacity = '0.2';
            faceElemento1[1].style.opacity = '0.2';
            faceElemento2[0].style.opacity = '0.2';
            faceElemento2[1].style.opacity = '0.2';

            paresEncontrados++;

            document.querySelector('.pares-encontrados').innerHTML = `Pares encontrados: ${paresEncontrados}/6`
            setTimeout(() => {
                if (paresEncontrados === 6) {
                    $infosNaTela.style.display='block';
                    $audio.pause()
                    $audioWin.play()
                    $audioWin.volume=.5;
                    $h2InfosNaTela.innerHTML=`
                    Fim de Jogo!
                    Seu tempo foi de: ${(mm < 10 ? "0" + mm : mm)}:${(ss < 10 ? "0" + ss : ss)}:${(ms < 10 ? "0" + ms : ms)}.`;
                    pausar()}}, 1000)
        } else {
            arrayDuasCartas = [];
            setTimeout(() => {
                faceElemento1[0].classList.toggle('flip')
                faceElemento1[1].classList.toggle('flip')
                faceElemento2[0].classList.toggle('flip')
                faceElemento2[1].classList.toggle('flip')
                document.querySelector('.section-descricao').innerHTML = '';
            }, 800)
        }
    }
}