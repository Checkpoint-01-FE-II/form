const $header= document.querySelector('header');
const $containerCartas = document.querySelector('.container-cartas');

let tempo = '00:00:00';
let paresEncontrados = 0;

$header.insertAdjacentHTML("beforeend", `
    <h6>Tempo: ${tempo}</h6>
    <h6>Pares encontrados: ${paresEncontrados}/7</h6>
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

const embaralharCartas = (arr)=>{
    let novoArray=[];
    while(novoArray.length !== arr.length){
        let i=Math.floor(Math.random()*arr.length);
        novoArray.indexOf(arr[i])<0 ? novoArray.push(arr[i]) : '';
    };
    return novoArray;
};

cartasDefault = embaralharCartas(cartasDefault);
console.log(cartasDefault)

for(let i=0; i<cartasDefault.length;i++){
    cartasDefault[i].id=`carta${i}`
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


    for(let i=0; i<cartasDefault.length;i++){
        document.querySelector("#carta" + (i)).addEventListener('click', function (){
            let faces = this.getElementsByClassName('div-frente-verso')
            faces[0].classList.toggle('flip');
            faces[1].classList.toggle('flip');
            document.querySelector('.section-descricao').innerHTML =
            `
            <img class='img-descricao'
            src="../imgs/background.png"
            alt="">
            <div>
                <h3>${cartasDefault[i].titulo}<h3>
                <p>${cartasDefault[i].descricao}</p>                
            </div>
            `
        }
        )
    }
