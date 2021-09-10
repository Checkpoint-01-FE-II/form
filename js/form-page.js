//-----------------------------------------------------------------        
//CRIAÇÃO ELEMENTOS COM SUAS VARIÁVEIS

const $main = document.createElement("main");
    const $formulario = document.createElement("form");
        const $tituloForm = document.createElement("h1");

        const $campoForm1 = document.createElement("fieldset");
            const $legendCampo1 = document.createElement("legend");
            const $inputCampo1 = document.createElement("input");
        
        const $campoForm2 = document.createElement("fieldset");
            const $legendCampo2 = document.createElement("legend");
            const $inputCampo2 = document.createElement("input");
            
        const $campoForm3 = document.createElement("fieldset");
            const $legendCampo3 = document.createElement("legend");    
            const $inputCampo3 = document.createElement("input");
        
        const $btnEnviar = document.createElement("button");
        const $btnCancelar = document.createElement("button");
        // const $btnVoltar = document.createElement("button");
        const $btnVoltar = document.createElement('a');
//------------------------------------------------------------------------ 
//APENSANDO ELEMENTOS

document.body.appendChild($main);
    
    $main.appendChild($formulario);
           
        $formulario.appendChild($tituloForm);
        
        $formulario.appendChild($campoForm1);
            $campoForm1.appendChild($legendCampo1);
            $campoForm1.appendChild($inputCampo1);
        
        $formulario.appendChild($campoForm2);
            $campoForm2.appendChild($legendCampo2);
            $campoForm2.appendChild($inputCampo2);
        
        $formulario.appendChild($campoForm3);
            $campoForm3.appendChild($legendCampo3);
            $campoForm3.appendChild($inputCampo3);

//VALE A PENA CRIAR UMA DIV SÓ PARA BTNS, COMO CARD PREVIEW      
document.body.appendChild($btnEnviar);
document.body.appendChild($btnCancelar);
document.body.appendChild($btnVoltar);

//------------------------------------------------------------------------ 
//EDITANDO ATRIBUTOS DOS ELEMENTOS
  
    $tituloForm.insertAdjacentText("afterbegin", "Meu Baralho");
    
    $campoForm1.setAttribute("type", "text");   
        $legendCampo1.insertAdjacentText("afterbegin", "Título");    
        $inputCampo1.setAttribute("placeholder", "Insira título"); 
        // $inputCampo1.required = "true";
        // $inputCampo1.pattern = "[\\S]{4,20}";
        //ACRESCENTAR ORIENTAÇÃO AO USUÁRIO SOBRE PREENCHIMENTO DO INPUT
        //BUSCAR PADRÃO QUE PERMITA UM ESPAÇO ENTRE PALAVRAS
        
        
    $campoForm2.setAttribute("type", "text");
        $legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        $inputCampo2.setAttribute("placeholder", "Insira descrição");
        // $inputCampo2.required = "true";
        //inputCampo2.setAttribute("maxlength", "400");
        //inputCampo2.pattern = "[\\S]{4,400}";
        //PADRÃO DISTINTO -> USUÁRIO DIGITARÁ UM TEXTO
        //LIMITE DE CARACTERES = 400
    
    $campoForm3.setAttribute("type", "file"); //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
        $legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        $inputCampo3.setAttribute("placeholder", "Insira URL");
        $inputCampo3.setAttribute("type", "text");
        // $inputCampo3.required = "true";
        //inputCampo3.pattern = "[\\S]";

    $btnEnviar.setAttribute("type", "submit");
    $btnEnviar.setAttribute("form", "form-baralho");
    $btnEnviar.onclick = evt => {
        evt.preventDefault();
        modal.style.display = "flex";
        $cardTitulo.innerHTML = $inputCampo1.value;
        $cardText.innerHTML = $inputCampo2.value;
        $cardImg.src = $inputCampo3.value;
    };

    // evt.preventDefault();
//     modal.style.display = "flex";
//     $cardTitulo.innerHTML = $inputCampo1.value;
//     $cardText.innerHTML = $inputCampo2.value;
//     $cardImg.innerHTML = $inputCampo3.value;
    
    //REFATORAR FUNC DE EXIBIÇÃO DO MODAL
    // btnEnviar.onsubmit = () => {
        
    //     modal.style.display = "flex";
    // }
    
    
    $btnEnviar.insertAdjacentText("afterbegin", "Enviar");


    $btnCancelar.setAttribute("type", "reset");
    $btnCancelar.setAttribute("form", "form-baralho");
    $btnCancelar.insertAdjacentText("afterbegin", "Cancelar");

    $btnVoltar.href = '../index.html'
    $btnVoltar.insertAdjacentHTML('afterbegin', `
    <img id='img-button' src="../imgs/setas/icons8-desfazer-100 (1)_edited.png" alt="">`)
    // $btnVoltar.addEventListener('click', ()=> location.href = "../index.html");

    // $btnVoltar.insertAdjacentText("afterbegin", "Voltar");
//------------------------------------------------------------------------ 
//ATRIBUIÇÃO DE CLASSES E IDs

$formulario.id = "form-baralho";
$formulario.classList.add("nes-container");
$formulario.classList.add("is-dark");

$campoForm1.className = "campo-formulario";
$campoForm2.className = "campo-formulario";
$campoForm3.className = "campo-formulario";
const $cCampo = document.getElementsByClassName("campo-formulario");

$legendCampo1.className = "legend-formulario";
$legendCampo2.className = "legend-formulario";    
$legendCampo3.className = "legend-formulario";
const $cLegend = document.getElementsByClassName("legend-formulario");

$inputCampo1.id = "input-titulo";
$inputCampo2.id = "input-descricao";
$inputCampo3.id = "input-img";
$inputCampo1.className = "input-formulario";     
$inputCampo2.className = "input-formulario";
$inputCampo3.className = "input-formulario";
const $cInput = document.getElementsByClassName("input-formulario");

$btnEnviar.classList.add("form-btn")
$btnEnviar.classList.add("nes-btn");
$btnEnviar.classList.add("is-warning");

$btnCancelar.classList.add("form-btn");
$btnCancelar.classList.add("nes-btn");
$btnCancelar.classList.add("is-warning");

// $btnVoltar.classList.add("form-btn");
// $btnVoltar.classList.add("nes-btn");
// $btnVoltar.classList.add("is-warning");

const $cFormBtn = document.getElementsByClassName("form-btn");



//------------------------------------------------------------------------ 
//STYLE

//SETANDO A PÁGINA
document.querySelector("*").style.cssText = `
    padding: 0;
    margin: 0;
    font-size: 10px;
    box-sizing: border-box;
`

    document.body.style.cssText = `
        width: 100vw;
        height: 100vh;
        background-image: url(../imgs/background.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    `
    
    if (window.matchMedia("(min-width: 768px)").matches) {
        $formulario.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding-bottom: 2rem;
            width: 500px;
            height: 500px;
        `
        $tituloForm.style.cssText=`
        margin-top: 2rem;    
        font-size: 2rem;
        `
    } else{
        $formulario.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding-bottom: 2rem;
        `
        $tituloForm.style.cssText=`
            font-size: 1.6rem;
        `
    }
        
        
        //ESTILO FIELDSET - cor anterior: #FFC9725B
        if (window.matchMedia("(min-width: 768px)").matches) {
            Array.from($cCampo).forEach(element => {
                element.style.cssText=`
                    border: .3rem solid #ffffff;
                    font-size: 1rem;
                `
            });
    
            $campoForm1.style.cssText = `
                margin-top: 1.5rem;
                border: .3rem solid #ffffff;
                font-size: 1rem;
                padding: 1rem;
                width: 80%;
            `
            $campoForm2.style.cssText = `
                margin-top: 1.5rem;
                border: .3rem solid #ffffff;
                font-size: 1rem;
                padding: 1rem;
                width: 80%;
            `
            $campoForm3.style.cssText = `
                margin-top: 1.5rem;
                border: .3rem solid #ffffff;
                font-size: 1rem;
                padding: 1rem;
                width: 80%;
            `
                
            //ESTILO LEGEND
            // Array.from($cLegend).forEach(element => {  
            //     element.style.cssText=`
            //         display: none;
            //         width: fit-content;
            //         margin-left: .5rem;
            //         font-size: 1.6rem;

            //     `
            // });

            Array.from($cLegend).forEach(element => {
                    element.style.cssText=`
                        display: none;
                    `
            });
            $inputCampo1.addEventListener('focusin', ()=>{
                $legendCampo1.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1.6rem;
                `
                $inputCampo1.placeholder = '';
                
            })
            $inputCampo2.addEventListener('focusin', ()=>{
                $legendCampo2.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1.6rem;
                `
                $inputCampo2.placeholder = '';
            })
            $inputCampo3.addEventListener('focusin', ()=>{
                $legendCampo3.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1.6rem;
                `
                $inputCampo3.placeholder = '';
            })

            $inputCampo1.addEventListener('focusout', ()=>{
                $legendCampo1.style.cssText=`
                    display: none;
                `
                $inputCampo1.placeholder = 'Insira título';
            })
            $inputCampo2.addEventListener('focusout', ()=>{
                $legendCampo2.style.cssText=`
                    display: none;
                `
                $inputCampo2.placeholder = 'Insira descrição';
            })
            $inputCampo3.addEventListener('focusout', ()=>{
                $legendCampo3.style.cssText=`
                    display: none;
                `
                $inputCampo3.placeholder = 'Insira URL';
            })


            //ESTILO INPUT
            Array.from($cInput).forEach(element => {
                element.style.cssText=`
                    border: none;    
                    outline: none;
                    background-color: #212529;
                    padding: 1rem 2rem 1rem 2rem;
                    width: 95%;
                    color: #FFFFFF;
                    text-align: center;
                    font-size: 1.3rem;
                `
            });


            
    
            //ESTILO BTNS DO FORM
            Array.from($cFormBtn).forEach(element => {
                    element.style.cssText=`
                    font-size: 1.5rem;
                    border-image-repeat: stretch;
                    width: 16rem;
                `
            });
        
        
        } else {
        Array.from($cCampo).forEach(element => {
            element.style.cssText=`
                border: .3rem solid #ffffff;
                font-size: 1rem;
            `
        });

        $campoForm1.style.cssText = `
            margin-top: 1.5rem;
            border: .3rem solid #ffffff;
            font-size: 1rem;
        `
        
        //ESTILO LEGEND
        Array.from($cLegend).forEach(element => {
            element.style.cssText=`
                display: none;
                width: fit-content;
                margin-left: .5rem;
                font-size: 1.2rem;
            `
        });
    
        //ESTILO INPUT
        Array.from($cInput).forEach(element => {
            element.style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 1rem 2rem 1rem 2rem;
                width: 95%;
                color: #FFFFFF;
                text-align: center;
                font-size: .9rem;
            `
        });

        //ESTILO BTNS DO FORM
        Array.from($cFormBtn).forEach(element => {
                element.style.cssText=`
                font-size: 1.5rem;
                border-image-repeat: stretch;
                width: 16rem;
            `
        });


            $legendCampo1.style.cssText=`
                display: none;
            `
            $legendCampo2.style.cssText=`
                display: none;
            `
            $legendCampo3.style.cssText=`
                display: none;
            `

            $inputCampo1.addEventListener('focus', ()=>{
                $legendCampo1.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1rem;
                `
                $inputCampo1.placeholder = '';
                
            })
            $inputCampo2.addEventListener('focus', ()=>{
                $legendCampo2.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1rem;
                `
                $inputCampo2.placeholder = '';
            })
            $inputCampo3.addEventListener('focus', ()=>{
                $legendCampo3.style.cssText=`
                    display: auto;
                    width: fit-content;
                    margin-left: .5rem;
                    font-size: 1rem;
                `
                $inputCampo3.placeholder = '';
            })

            $inputCampo1.addEventListener('focusout', ()=>{
                $legendCampo1.style.cssText=`
                    display: none;
                `
                $inputCampo1.placeholder = 'Insira título';
            })
            $inputCampo2.addEventListener('focusout', ()=>{
                $legendCampo2.style.cssText=`
                    display: none;
                `
                $inputCampo2.placeholder = 'Insira descrição';
            })
            $inputCampo3.addEventListener('focusout', ()=>{
                $legendCampo3.style.cssText=`
                    display: none;
                `
                $inputCampo3.placeholder = 'Insira URL';
            })
    }

//------------------------------------------------------------------------ 
//INTERATIVIDADE        

        let listaDeCartas = localStorage.getItem("listaDeCartas");

        if(listaDeCartas ==null){
            listaDeCartas = []
          localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        } else {
            listaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"))
        }
        
        function adicionarCarta(){
          if ($inputCampo1.value != '' && $inputCampo2.value != '' && $inputCampo3.value != '') {
            let dadosNovaCarta=
              {
                id: '',
                titulo: $inputCampo1.value,
                url: $inputCampo3.value,
                descricao: $inputCampo2.value,
              }

            listaDeCartas.push(dadosNovaCarta);
            listaDeCartas.push(dadosNovaCarta);
            localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
            //DEVEMOS MUDAR O ENDEREÇO DO LOCATION.HREF, NÃO?
            location.reload();
          }else{
            alert("Verifique se a URL inserida é válida (.png ou .jpg) e se todos os campos estão preenchidos.")
          }
        }


//------------------------------------------------------------------------ 
//MODAL

const $modalContainer = document.createElement("div");
    const $cardPreview = document.createElement("div");
        const $cardImg = document.createElement("img");
        const $cardTitulo = document.createElement("h3");
        const $cardText = document.createElement("p");
    const $divCardBtns = document.createElement("div");
        const $cardBtnConfirmar = document.createElement("button");
        const $cardBtnVoltar = document.createElement("button");

//-----------------------------------------------------------------

$modalContainer.id = "modal";

$cardPreview.classList.add("nes-container");
$cardPreview.classList.add("is-dark");

$cardBtnConfirmar.classList.add("card-btn");
$cardBtnConfirmar.classList.add("nes-btn");
$cardBtnConfirmar.classList.add("is-warning");

$cardBtnVoltar.classList.add("card-btn");
$cardBtnVoltar.classList.add("nes-btn");
$cardBtnVoltar.classList.add("is-warning");
const $cCardBtn = document.getElementsByClassName("card-btn");

//-----------------------------------------------------------------

document.body.appendChild($modalContainer);

    $modalContainer.appendChild($cardPreview);
        $cardPreview.appendChild($cardImg);
        $cardPreview.appendChild($cardTitulo);
        $cardPreview.appendChild($cardText);

    $modalContainer.appendChild($divCardBtns);
        $divCardBtns.appendChild($cardBtnConfirmar);
        $divCardBtns.appendChild($cardBtnVoltar);

//-----------------------------------------------------------------

//MUDAR VALORES DO CARD, DEIXAR "" VAZIOS
$cardImg.setAttribute("src","");
$cardImg.setAttribute("alt","Imagem a ser exibida na carta");

$cardTitulo.insertAdjacentText("afterbegin", "");

$cardText.insertAdjacentText("afterbegin", "");

$cardBtnConfirmar.setAttribute("type", "submit");

//REMOVER COMENTÁRIO AO FINAL - ALERTA DO ELSE INCOMODA NA HORA DE CODAR
$cardBtnConfirmar.onclick = () => adicionarCarta();

$cardBtnConfirmar.insertAdjacentText("afterbegin", "Confirmar");

$cardBtnVoltar.insertAdjacentText("afterbegin", "Voltar");
$cardBtnVoltar.onclick = () => modal.style.display = "none";

window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 


//-----------------------------------------------------------------

$modalContainer.style.cssText=`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    gap: 1rem;
    background-color: rgba(0,0,0,0.85);
    `

        $cardPreview.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding-bottom: 2rem;
            width: 35rem;
            max-width: 95%;
            max-height: 95%;
            `

            $cardImg.style.cssText=`
                width: 27rem;
                max-height: 27rem;
                object-fit: scale-down;
                border: 1rem solid;
                border-image-slice: 35;
                border-image-source: url(./imgs/borda-cartas.png);
                background-color: white;
                `

            $cardTitulo.style.cssText=`
                font-size: 1.6rem;
                `

            $cardText.style.cssText=`
                font-size: .9rem;
                text-align: center;
                line-height: 1.5rem;
                width: 27rem;
                `
        
        $divCardBtns.style.cssText=`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            gap: 1rem;
        `
        
        Array.from($cCardBtn).forEach(element => {
            element.style.cssText=`
                font-size: 1.5rem;
                border-image-repeat: stretch;
                width: 14rem;
            `
        });


//----------------------------------------------------------------

//FUNCTION MONTAR MODAL

// const comporCard = (evt) => {
//     evt.preventDefault();
//     modal.style.display = "flex";
//     $cardTitulo.innerHTML = $inputCampo1.value;
//     $cardText.innerHTML = $inputCampo2.value;
//     $cardImg.innerHTML = $inputCampo3.value;
// };
// document.addEventListener('DOMContentLoaded', () => $btnEnviar.onclick = "comporCard()");




    if (window.matchMedia("(min-width: 768px)").matches) {
        document.querySelector('#img-button').style.cssText =
        `
        position: absolute;
        top: 2%;
        left: 5%;
        width:70px;
        height: 70px;
        `
    } else {
        document.querySelector('#img-button').style.cssText =
        `
        position: absolute;
        top: 2%;
        left: 5%;
        width: 50px;
        height: 50px;
        `
    }

