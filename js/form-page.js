//-----------------------------------------------------------------        
//CRIAÇÃO ELEMENTOS COM SUAS VARIÁVEIS

const $header = document.createElement('header')
const $main = document.createElement("main");
    const $formulario = document.createElement("form");
        const $tituloForm = document.createElement("h1");

        const $campoForm1 = document.createElement("fieldset");
            const $legendCampo1 = document.createElement("legend");
            const $inputCampo1 = document.createElement("input");
        
        const $campoForm2 = document.createElement("fieldset");
            const $legendCampo2 = document.createElement("legend");
            // const $inputCampo2 = document.createElement("input");
            const $inputCampo2 = document.createElement("textarea");
            
        const $campoForm3 = document.createElement("fieldset");
            const $legendCampo3 = document.createElement("legend");    
            const $inputCampo3 = document.createElement("input");
        
        const $btnEnviar = document.createElement("button");
        const $btnCancelar = document.createElement("button");
        const $btnVoltar = document.createElement('a');
        const $btnJogar = document.createElement('button');
        //DIV DOS BOTÕES DO FORM
        const $divBtnsForm = document.createElement('div')
//------------------------------------------------------------------------ 
//APENSANDO ELEMENTOS
document.body.appendChild($header);
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

$divBtnsForm.appendChild($btnEnviar);
$divBtnsForm.appendChild($btnCancelar);
$main.appendChild($divBtnsForm);
$main.appendChild($btnVoltar);
$main.appendChild($btnJogar);

//------------------------------------------------------------------------ 
//EDITANDO ATRIBUTOS DOS ELEMENTOS
  
    $tituloForm.insertAdjacentText("afterbegin", "Meu Baralho");
    
    $campoForm1.setAttribute("type", "text");   
        $legendCampo1.insertAdjacentText("afterbegin", "Título");    
        $inputCampo1.setAttribute("placeholder", "Insira título"); 
        
    $campoForm2.setAttribute("type", "text");
        $legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        $inputCampo2.setAttribute("placeholder", "Insira descrição");
    
    $campoForm3.setAttribute("type", "file"); 
    //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
        $legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        $inputCampo3.setAttribute("placeholder", "Insira URL");
        $inputCampo3.setAttribute("type", "text");

    $btnEnviar.setAttribute("type", "submit");
    $btnEnviar.setAttribute("form", "form-baralho");
    $btnEnviar.onclick = evt => {
        evt.preventDefault();
        $modalContainer.style.display = "flex";
        $cardTitulo.innerHTML = $inputCampo1.value;
        $cardText.innerHTML = $inputCampo2.value;
        $cardImg.src = $inputCampo3.value;
    };    
    $btnEnviar.insertAdjacentText("afterbegin", "Enviar");
    $btnEnviar.disabled = true;

    $btnCancelar.setAttribute("type", "reset");
    $btnCancelar.setAttribute("form", "form-baralho");
    $btnCancelar.insertAdjacentText("afterbegin", "Cancelar");

    $btnVoltar.href = '../index.html'
    $btnVoltar.insertAdjacentHTML('afterbegin', `
    <img id='img-button' src="../imgs/setas/icons8-desfazer-100 (1)_edited.png" alt="">`)

    
    $btnJogar.insertAdjacentText("afterbegin", "Start");
    $btnJogar.disabled=true;
    $btnJogar.classList.add('is-disabled')
    $btnJogar.classList.add('nes-btn');
    $btnJogar.addEventListener('click', ()=>{
        location.href = "../html/game-page-created.html"
    })
    document.querySelector('.nes-btn').style.cssText=
    `
        font-size: 1.5rem;
        border-image-repeat: stretch;
        width: 30rem;
    `


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
    `
    $main.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
`


    if (window.matchMedia("(min-width: 768px)").matches) {
        $tituloForm.style.cssText=`
            margin-top: 2rem;    
            font-size: 2rem;
            text-align: center;
        `
        
        $divBtnsForm.style.cssText=
        `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
        `
    } else{
        $tituloForm.style.cssText=`
            font-size: 1.6rem;
            text-align: center;
        `    
        $divBtnsForm.style.cssText=
        `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
        `
    }
        

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
        let paresCriados = 0;
        $header.insertAdjacentHTML("beforeend", `
            <h6 class='pares-criados'>Pares criados: ${paresCriados}/6</h6>
        `);

        let listaDeCartas = localStorage.getItem("listaDeCartas");
        if (listaDeCartas.length >= 4) {
            $btnJogar.classList.remove('is-disabled')
            $btnJogar.classList.add('is-error')
            $btnJogar.disabled = false
        }
        if(listaDeCartas ==null){
            listaDeCartas = []
          localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        } else {
            listaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"))
        }
        
        function adicionarCarta(){
        let dadosNovaCarta=
            {
            id: '',
            titulo: $inputCampo1.value,
            url: $inputCampo3.value,
            descricao: $inputCampo2.value,
            }

        if (listaDeCartas.length <= 10) {
            listaDeCartas.push(dadosNovaCarta);
            listaDeCartas.push(dadosNovaCarta);
        } else {
            alert("Você atingiu o limite de cartas!")
        }
        localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        location.reload()
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

$main.appendChild($modalContainer);

    $modalContainer.appendChild($cardPreview);
        $cardPreview.appendChild($cardImg);
        $cardPreview.appendChild($cardTitulo);
        $cardPreview.appendChild($cardText);

    $modalContainer.appendChild($divCardBtns);
        $divCardBtns.appendChild($cardBtnConfirmar);
        $divCardBtns.appendChild($cardBtnVoltar);

//-----------------------------------------------------------------

$cardImg.setAttribute("src","");
$cardImg.setAttribute("alt","Imagem a ser exibida na carta");

$cardTitulo.insertAdjacentText("afterbegin", "");

$cardText.insertAdjacentText("afterbegin", "");

$cardBtnConfirmar.setAttribute("type", "submit");

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
    position:absolute;
    top: -20%;
    width: 150vw;
    height: 150vh;
    gap: 1rem;
    background-color: rgba(0,0,0,0.85);
    z-index: 7;
    `

        $cardPreview.style.cssText=`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding-bottom: 2rem;
            width: 26rem;
            height: 48rem;
            `
            // max-width: 95%;
            // max-height: 95%;
            $cardImg.style.cssText=`
                width: 22rem;
                max-height: 27rem;
                object-fit: scale-down;
                border: 1rem solid;
                border-image-slice: 35;
                border-image-source: url(./imgs/borda-cartas.png);
                background-color: white;
                `

            $cardTitulo.style.cssText=`
                font-size: 1.2rem;
                overflow: hidden;
                width: 22rem;
                height: 2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                `

            $cardText.style.cssText=`
                font-size: .8rem;
                line-height: 1rem;
                width: 22rem;
                height: 20rem;
                white-space: pre-line;
                overflow: hidden;
                text-overflow: ellipsis;
                `
                // text-overflow: ellipsis;
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

//VALIDAÇÃO DE INPUTS

//CRIAÇÃO DOS ELEMENTOS E VARIÁVEIS DAS MSGS DE ERRO

const $msgErroInput1 = document.createElement("label");
$formulario.appendChild($msgErroInput1);
$msgErroInput1.setAttribute("for", "input-titulo");

const $msgErroInput2 = document.createElement("label");
$formulario.appendChild($msgErroInput2);
$msgErroInput1.setAttribute("for", "input-descricao");

const $msgErroInput3 = document.createElement("label");
$formulario.appendChild($msgErroInput3);
$msgErroInput1.setAttribute("for", "input-img");

//ATRIBUIÇÃO DE CLASSES

$msgErroInput1.className = "msg-erro";     
$msgErroInput2.className = "msg-erro";
$msgErroInput3.className = "msg-erro";
const $cMsgErro = document.getElementsByClassName("msg-erro")

//ATRIBUIÇÃO DE ESTILO

    Array.from($cMsgErro).forEach(element => {
        element.style.cssText=`
        text-align: center;
        color: red;
        display: none;
        padding-bottom: 0;
        font-size: 1rem;
        `
    });

//VINCULANDO A EVENTO

$inputCampo1.addEventListener("focusout", () => validarInput1())
$inputCampo2.addEventListener("focusout", () => validarInput2())
$inputCampo3.addEventListener("focusout", () => validarInput3())

//DEFININDO COMPORTAMENTOS

let verificador = [0, 0, 0];

function validarInput1 () {
    let valorTrim = $inputCampo1.value.trim()
    if (valorTrim == "") {
        $msgErroInput1.innerHTML = "Escreva um Título";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput1.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput1.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[0] = 0;
        $inputCampo1.focus()
        $btnEnviar.disabled = true;
    } else if (valorTrim.length >= 30) {
        $msgErroInput1.innerHTML = "Título deve ter até 30 caracteres";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput1.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput1.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[0] = 0;
        $inputCampo1.focus()
        $btnEnviar.disabled = true;
    } else {
        $msgErroInput1.style.cssText=`
            display: none;
        `
        verificador[0] = 1;
        if (verificador.reduce((acc, sum)=>acc+=sum)==6) {
            $btnEnviar.disabled = false;
        }
    }
}

function validarInput2 () {
    let valorTrim = $inputCampo2.value.trim()
    if (valorTrim == "") {
        $msgErroInput2.innerHTML = "Escreva uma Descrição";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput2.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput2.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[1] = 0; 
        $inputCampo2.focus()
        $btnEnviar.disabled = true;     
    } else if (valorTrim.length >= 400) {
        $msgErroInput2.innerHTML = "Título deve ter até 400 caracteres";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput2.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput2.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[1] = 0;
        $inputCampo2.focus()
        $btnEnviar.disabled = true;
    } else {
        $msgErroInput2.style.cssText=`
            display: none;
        `
        verificador[1] = 2;
        if (verificador.reduce((acc, sum)=>acc+=sum)==6) {
            $btnEnviar.disabled = false;
        }
    }
}

function validarInput3 () {
    let valorTrim = $inputCampo3.value.trim()
    if (valorTrim == "") {
        $msgErroInput3.innerHTML = "Insira uma URL";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput3.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput3.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[2] = 0;
        $inputCampo3.focus()
        $btnEnviar.disabled = true;    
    } else if (!valorTrim.match(/(jpeg|jpg|png)/)) {
        $msgErroInput3.innerHTML = "URL inválida";
        if (window.matchMedia("(min-width: 768px)").matches) {
            $msgErroInput3.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1.5rem;
            `     
        } else {
            $msgErroInput3.style.cssText=`
                color: red;
                text-align: center;
                display: auto;
                padding-bottom: 0;
                font-size: 1rem;
            `     
        }
        verificador[2] = 0;
        $inputCampo3.focus()
        $btnEnviar.disabled = true;           
    } else {
        $msgErroInput3.style.cssText=`
            display: none;
        `
        verificador[2] = 3;
        if (verificador.reduce((acc, sum)=>acc+=sum)==6) {
            $btnEnviar.disabled = false;
        }
        
    }
}

//RESETA CONDIÇÃO DO BTN ENVIAR PARA DESABILITADO
$formulario.addEventListener("reset", () => $btnEnviar.disabled="true");

//----------------------------------------------------------------
//RESPONSIVIDADE

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



    //MODAL INICIAL - INSTRUÇÕES PARA CRIAÇÃO DAS CARTAS

    const $divModal = document.createElement('div');
    $divModal.classList.add('modal-instrucoes');
    // const $divCaixaInfos = document.createElement('div');
    // $divCaixaInfos.classList.add('caixa-infos');
    // $divCaixaInfos.setAttribute('id', 'caixa-infos')
    // $divCaixaInfos.setAttribute('disabled', 'true')
    // $divModal.appendChild($divCaixaInfos)
    // const $divInfosCards = document.createElement('div');
    // $divInfosCards.classList.add('infos-cards');
    // $divInfosCards.classList.add('nes-container');
    // $divInfosCards.classList.add('is-dark');
    // $divCaixaInfos.appendChild($divInfosCards);
    // const $h1ModalTitulo = document.createElement('h1')
    // $h1ModalTitulo.classList.add('title-modal-instrucoes')
    // $h1ModalTitulo.insertAdjacentText('afterbegin', `Crie seu baralho de cartas`)
    // $divCaixaInfos.appendChild($h1ModalTitulo);
    // const $pSubtitleModalInstrucoes = document.createElement('p')

    $divModal.insertAdjacentHTML('afterbegin', `  
        <div id="caixa-infos" disabled class="caixa-infos">
            <div class="infos-cards nes-container is-dark" >
                <h1 class="title-modal-instrucoes">Crie seu baralho de cartas</h1>
                <p class="subtitle">Siga as instruções abaixo para criar as suas cartas</p>
                <h2 class="instructions">Instruções</h2>
                <ol class='lista'>
                    <li class='p-instructions'>Seu baralho deverá ter no mínimo 2 e no máximo 6 pares de cartas.</li>
                    <li class='p-instructions'>Cada carta que você adicionar, automaticamente será gerado pelo sistema uns respectivo par para ela.</li>
                    <li class='p-instructions'>Não adicione cartas com imagens idênticas.</li>
                    <li class='p-instructions'>A partir de duas cartas adicionadas, é liberado o botão "Start" e você poderá iniciar a partida.</li>
                    <li class='p-instructions'>O campo título deve ser preenchido com no máximo 30 caracteres.</li>
                    <li class='p-instructions'>O campo descrição deve ser preenchido com no máximo 400 caracteres.</li>
                    <li class='p-instructions'>Para obter a URL da imagem, clique com o botao direito do mouse sobre uma imagem que você escolhar na internet e clique em "copiar link da imagem".</li>
                    <li class='p-instructions'>Nenhum dos campos pode estar vazio (sem preencher).</li>
                </ol>
                <div class='div-btns'>
                    <button onclick="fecharInstrucoes()" id="btnFecharInstrucoes"
                        class="nes-btn is-warning">Ok</button>
                </div>
            </div>
        </div>
    `)

    $main.appendChild($divModal)

//ESTILIZAÇÃO RESPONSIVA DO MODAL
if (window.matchMedia("(min-width: 1024px)").matches) {
    //modal com as instruções do jogo.
    $divModal.style.cssText=
    `
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `
    document.querySelector('.caixa-infos').style.cssText=
    `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 900px;
    `
    document.querySelector('.infos-cards').style.cssText=`
    padding:  40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    `
    document.querySelector('.title-modal-instrucoes').style.cssText=
    `
        font-weight: 600;
        font-size: 20px;
    `
    document.querySelector('.subtitle').style.cssText=
    `
    font-size: 13px;
    line-height: 30px;
    `
    document.querySelector('.instructions').style.cssText=
    `
    font-weight: 600;
    font-size: 18px;
    `            
    let pInstructions = document.getElementsByClassName('p-instructions')
    
    for(let p of pInstructions){
        p.style.cssText=
        `            
        margin: 0 50px;
        line-height: 15px;
        font-size: 10px;
        text-align: left;
        `
    }
    document.querySelector('.lista').style.cssText=
    `
    display:flex;
    flex-direction: column;
    gap: 10px;
    `
    document.querySelector('#btnFecharInstrucoes').style.cssText=
    `
        width: 150px;
    `
} else if (window.matchMedia("(min-width: 768px)").matches) {

$divModal.style.cssText=
`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
document.querySelector('.caixa-infos').style.cssText=
`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
width: 650px;
`
document.querySelector('.infos-cards').style.cssText=`
padding: 40px 25px;
display: flex;
flex-direction: column;
gap: 20px;
text-align: center;
`
document.querySelector('.title-modal-instrucoes').style.cssText=
`
    font-weight: 600;
    font-size: 18px;
`
document.querySelector('.subtitle').style.cssText=
`
font-size: 13px;
line-height: 30px;
`
document.querySelector('.instructions').style.cssText=
`
font-weight: 600;
font-size: 18px;
`            
let pInstructions = document.getElementsByClassName('p-instructions')

for(let p of pInstructions){
    p.style.cssText=
    `            
    margin: 0 50px;
    line-height: 15px;
    font-size: 10px;
    text-align: left;
    `
}

document.querySelector('.lista').style.cssText=
`
display:flex;
flex-direction: column;
gap: 10px;
`
document.querySelector('#btnFecharInstrucoes').style.cssText=
`
    width: 150px;
`
} 
else {
    $divModal.style.cssText=
    `
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 1400px;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `
    document.querySelector('.caixa-infos').style.cssText=
    `
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -25%);
        z-index: 3;
        width: 90%;
    `
    document.querySelector('.infos-cards').style.cssText=`
        padding:  15px;
        display: flex;
        flex-direction: column;
        gap: 13px;
        padding-top: 40px;
        text-align: center;
    `
    document.querySelector('.title-modal-instrucoes').style.cssText=
    `
        font-weight: 600;
        font-size: 13px;
    `
    document.querySelector('.subtitle').style.cssText=
    `
    font-size: 10px;
    line-height: 12px;
    `
    document.querySelector('.instructions').style.cssText=
    `
    font-weight: 600;
    font-size: 13px;
    `            
    let pInstructions = document.getElementsByClassName('p-instructions')
    
    for(let p of pInstructions){
        p.style.cssText=
        `            
        margin: 0 5px;
        line-height: 15px;
        font-size: 9px;
        text-align: left;
        `
    }
    document.querySelector('.lista').style.cssText=
    `
    display:flex;
    flex-direction: column;
    gap: 10px;
    `
    document.querySelector('#btnFecharInstrucoes').style.cssText=
    `
        width: 150px;
    `
}



function fecharInstrucoes(){
    $divModal.style.display='none';
    $divModal.disabled='true';
}


//ESTILO RESPONSIVO DO FORMULÁRIO
if(window.matchMedia('(min-width: 768px)').matches){
    document.getElementsByClassName('campo-formulario')[1].style.cssText=
    `
    height: 200px;
    background-color: #212529;
    color: #fff;
    border: 3px solid #fff;
    width: 80%;
    padding-top: 25px; 
    `
    document.querySelector('#input-descricao').style.cssText=
    `
    height: 130px;
    background-color: #212529;
    color: #fff;
    outline: none;
    border: none;
    text-align: center;
    resize: none;
    padding-left: 5px;
    width: 100%;
    font-size: 1.3rem;
    `

    $formulario.style.cssText = `
    width: 500px;
    margin: auto;
    height: 550px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-bottom: 25px;
    `
} else {
    document.getElementsByClassName('campo-formulario')[1].style.cssText=
    `
    height: 160px;
    background-color: #212529;
    color: #fff;
    border: 3px solid #fff;
    width: 100%;
    padding-top: 10px;
    `
    // 
    document.querySelector('#input-descricao').style.cssText=
    `
    height: 100px;
    background-color: #212529;
    color: #fff;
    outline: none;
    border: none;
    text-align: center;
    resize: none;
    padding-left: 10px;
    width: 100%;
    font-size: .9rem;
    `
    $formulario.style.cssText = `
    width: 90%;
    margin: auto;
    height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    `
}