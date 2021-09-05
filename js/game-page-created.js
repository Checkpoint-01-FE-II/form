const $header= document.querySelector('header')
const $containerCartas = document.querySelector('.container-cartas')


let tempo = '00:00:00';
let paresEncontrados = 0;

$header.insertAdjacentHTML("beforeend", `
    <h6>Tempo: ${tempo}</h6>
    <h6>Pares encontrados: ${paresEncontrados}/7</h6>
`);

let storagelistaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"));

const embaralharCartas = (arr)=>{
    let newArr=[];
    while(newArr.length !== arr.length){
        let i=Math.floor(Math.random()*arr.length)
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr
}

storagelistaDeCartas = embaralharCartas(storagelistaDeCartas);

for(let i=0; i<storagelistaDeCartas.length;i++){
$containerCartas.insertAdjacentHTML('beforeend', 
`
    <div class='cartas' id=${storagelistaDeCartas[i].id}>
        <div class='div-frente-verso front'>
            <img class='img-cartas' src='${storagelistaDeCartas[i].url}'} alt="">
        </div>
        <div class='div-frente-verso back'>
            <div class='img-cartas div-frente-verso'></div>
        </div>
    </div>
`)
}

for(let i=1; i<=storagelistaDeCartas.length;i++){
    document.querySelector("#carta" + i).addEventListener('click', flip)
}

function flip(){
    let faces = this.getElementsByClassName('div-frente-verso')
    faces[0].classList.toggle('flip');
    faces[1].classList.toggle('flip');
}
