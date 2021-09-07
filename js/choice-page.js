const $btn = document.querySelector('button')

$btn.addEventListener('click', ()=>{
    if(document.querySelector('#default').checked){
        location.href = '../game-page-default.html'
    } else if(document.querySelector('#created').checked){
        location.href = '../index.html'
    }
})
