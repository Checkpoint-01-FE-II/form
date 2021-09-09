const $btn = document.querySelector('button')
const $select = document.querySelector('select')
const audio = document.getElementById("musica");
audio.volume = 1;

$select.addEventListener("change",()=> {
    document.getElementById("musica").play()
})
document.querySelector("#default").addEventListener("change",()=> {
    document.getElementById("musica").play()
})
document.querySelector("#created").addEventListener("change",()=> {
    document.getElementById("musica").play()
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
            default:  
                storage='default';
                localStorage.setItem('baralho', JSON.stringify(storage))   
        }
        location.href = '../html/game-page-default.html'
    } else if(document.querySelector('#created').checked){
        location.href = '../html/form-page.html'
        
    }
})
