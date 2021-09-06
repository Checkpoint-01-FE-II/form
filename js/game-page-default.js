const $header = document.querySelector('header');
const $containerCartas = document.querySelector('.container-cartas');

let tempo = '00:00:00';
let paresEncontrados = 0;

$header.insertAdjacentHTML("beforeend", `
    <h6>Tempo: ${tempo}</h6>
    <h6 class='pares-encontrados'>Pares encontrados: ${paresEncontrados}/6</h6>
`);

//Array com as cartas preestabelecidas.
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

//função que embaralha os elementos do array "cartasDefault"
const embaralharCartas = (arr) => {
    let novoArray = [];
    while (novoArray.length !== arr.length) {
        let i = Math.floor(Math.random() * arr.length);
        novoArray.indexOf(arr[i]) < 0 ? novoArray.push(arr[i]) : '';
    };
    return novoArray;
};

cartasDefault = embaralharCartas(cartasDefault);


for (let i = 0; i < cartasDefault.length; i++) {
    cartasDefault[i].id = `carta${i}` //adiciona o id das cartas dinamicamente.
    $containerCartas.insertAdjacentHTML('beforeend', //adiciona as cartas na tela.
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

let arrayDuasCartas = [];

//adiciona um evento de click às cartas que adiciona/remove a classe flip aos elementos que possuem a classe "div-frente-verso"
for (let i = 0; i < cartasDefault.length; i++) {

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
            src="../imgs/${cartasDefault[i].url}"
            alt="">
            <div>
                <h3>${cartasDefault[i].titulo}<h3>
                <p>${cartasDefault[i].descricao}</p>                
            </div>
            `
            verificaPar(i)
        }
    }
    )
}

    

function verificaPar(i) {

    arrayDuasCartas.length == 2 ? arrayDuasCartas = [] : '';

    if (arrayDuasCartas.length == 0) {
        arrayDuasCartas.push(cartasDefault[i])
        console.log(arrayDuasCartas)
    } else if (arrayDuasCartas.length == 1) {
        arrayDuasCartas.push(cartasDefault[i])
        let idElemento1 = `#${arrayDuasCartas[0].id}`;
        let idElemento2 = `#${arrayDuasCartas[1].id}`;
        let faceElemento1 = document.querySelector(idElemento1).getElementsByClassName('div-frente-verso');
        let faceElemento2 = document.querySelector(idElemento2).getElementsByClassName('div-frente-verso');
        if (arrayDuasCartas[0].url == arrayDuasCartas[1].url) {
            faceElemento1[0].style.opacity = '0.2';
            faceElemento1[1].style.opacity = '0.2';
            faceElemento2[0].style.opacity = '0.2';
            faceElemento2[1].style.opacity = '0.2';
            faceElemento1[0].disabled = true;
            faceElemento1[1].disabled = true;
            faceElemento2[0].disabled = true;
            faceElemento2[1].disabled = true;

            paresEncontrados++;

            document.querySelector('.pares-encontrados').innerHTML = `Pares encontrados: ${paresEncontrados}/6`
            setTimeout(() => {
                if (paresEncontrados === 6) {
                    alert('Fim de Jogo, você conseguiu!')
                }
            }, 1000)

        } else {
            arrayDuasCartas = [];
            setTimeout(() => {
                faceElemento1[0].classList.toggle('flip')
                faceElemento1[1].classList.toggle('flip')
                faceElemento2[0].classList.toggle('flip')
                faceElemento2[1].classList.toggle('flip')
                document.querySelector('.section-descricao').innerHTML = '';
            }, 1200)
        }
    }
}