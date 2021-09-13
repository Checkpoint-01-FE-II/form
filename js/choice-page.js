const $btn = document.querySelector('button')
const $select = document.querySelector('select')
const $audio = document.getElementById("musica");
const $audioFundo = document.getElementById("musica-fundo");
$audio.volume = 1;


// window.addEventListener('mousemove', ()=>{
//     $audioFundo.play()
//     $audioFundo.volume = .4;
// })  

$select.addEventListener("change",()=> {
    $audio.play()
})
document.querySelector("#default").addEventListener("change",()=> {
    $audio.play()
})
document.querySelector("#created").addEventListener("change",()=> {
    $audio.play()
})


$btn.addEventListener('click', ()=>{
    let storage;
    if(document.querySelector('#default').checked){
        switch($select.value){
            case 'onepiece':
                storage='onepiece';
                localStorage.setItem('baralho', JSON.stringify(storage))      
            break;
            case 'marvel':
                storage='marvel';
                localStorage.setItem('baralho', JSON.stringify(storage))    
            break;
            case 'personagens-aleatorios-1': 
                storage='aleatorios1';
                localStorage.setItem('baralho', JSON.stringify(storage))    
            break;
            case 'personagens-aleatorios-2':
                storage='aleatorios2';
                localStorage.setItem('baralho', JSON.stringify(storage))    
            break;
            case 'ingles':
                storage='ingles';
                localStorage.setItem('baralho', JSON.stringify(storage))    
            break;
            default:  
                storage='default';
                localStorage.setItem('baralho', JSON.stringify(storage))   
        }
        location.href = 'game-page-default.html'
    } else if(document.querySelector('#created').checked){
        localStorage.removeItem('listaDeCartas')
        location.href = 'form-page.html'
        
    }
});
