const $header = document.querySelector('header');
const $containerCartas = document.querySelector('.container-cartas');

let hh = 0;
let mm = 0;
let ss = 0;
let cron;
let tempo = 1000;/*quantos milessimos equivalem a 1 seg*/
let paresEncontrados = 0;

function start() {
    cron = setInterval(() => { timer(); }, tempo)
    document.getElementById("btniniciar").style.display = "none"
    document.getElementById("btnreiniciar").style.display = "block"
}

function pausar() {


}
function recomecar() {
    cron = clearInterval
    hh = 0;
    mm = 0;
    ss = 0;
    
    embaralharCartas()
    cron = setInterval(() => { timer(); }, tempo)
}
function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;

        }
    }

    let formato = "Tempo : " + (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
    document.getElementById("Iniciar").innerText = formato
}

$header.insertAdjacentHTML("beforeend", `
    <h6 id="Iniciar">Tempo : 00:00:00</h6>
    <h6>Pares encontrados: ${paresEncontrados}/6</h6>
`);


let cartasDefault = [
    {
        id: '',
        titulo: 'Bulbasaur',
        url: 'carta01.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Loki',
        url: 'carta02.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Luke Skywalker',
        url: 'carta03.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Squirtle',
        url: 'carta04.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Little Mermaid',
        url: 'carta05.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Princess Jasmine',
        url: 'carta06.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Bulbasaur',
        url: 'carta01.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Loki',
        url: 'carta02.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Luke Skywalker',
        url: 'carta03.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Squirtle',
        url: 'carta04.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Little Mermaid',
        url: 'carta05.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    },
    {
        id: '',
        titulo: 'Princess Jasmine',
        url: 'carta06.jpg',
        descricao: 'Molestias magni assumenda, similique magnam reiciendis iure exercitationem voluptatum quaerat rerum vero, ducimus repellat voluptas distinctio cupiditate perspiciatis.'
    }
];

const embaralharCartas = (arr) => {
    let novoArray = [];
    while (novoArray.length !== arr.length) {
        let i = Math.floor(Math.random() * arr.length);
        novoArray.indexOf(arr[i]) < 0 ? novoArray.push(arr[i]) : '';
    };
    return novoArray;
};

cartasDefault = embaralharCartas(cartasDefault);
console.log(cartasDefault)

for (let i = 0; i < cartasDefault.length; i++) {
    cartasDefault[i].id = `carta${i}`
    $containerCartas.insertAdjacentHTML('beforeend',
        `
        <div class='cartas' id=${cartasDefault[i].id}>
            <div class='div-frente-verso front'>
                <img class='img-cartas' src='../imgs/${cartasDefault[i].url}' alt="">
            </div>
            <div class='div-frente-verso back'>
                <div class='img-cartas div-frente-verso'></div>
            </div>
        </div>
    `)
}


for (let i = 0; i < cartasDefault.length; i++) {
    document.querySelector("#carta" + (i)).addEventListener('click', function () {
        let faces = this.getElementsByClassName('div-frente-verso')
        faces[0].classList.toggle('flip');
        faces[1].classList.toggle('flip');
        document.querySelector('.section-descricao').innerHTML =
            `
            <img class='img-descricao'
            src="../imgs/${cartasDefault[i].url}"
            alt="">
            <div>
                <h3>${cartasDefault[i].titulo}<h3>
                <p>${cartasDefault[i].descricao}</p>                
            </div>
            `
    }
    )
}
