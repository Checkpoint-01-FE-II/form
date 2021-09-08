const $btn = document.querySelector('button')
const $select = document.querySelector('select')

$btn.addEventListener('click', ()=>{
    if(document.querySelector('#default').checked){
        switch($select.value){
            case 'onepiece':location.href = '../html/game-page-default-onepiece.html'
            break;
            case 'marvel': location.href = '../html/game-page-default-marvel.html'
            break;
            case 'personagens-aleatorios-1': location.href = '../html/game-page-default-aleatorios1.html'
            break;
            case 'personagens-aleatorios-2': location.href = '../html/game-page-default-aleatorios2.html'
            break;
            default: location.href = '../html/game-page-default.html'
        }
        
    } else if(document.querySelector('#created').checked){
        location.href = '../html/form-page.html'
    }
})
