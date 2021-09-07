//MAPA SIMPLIFICADO

    //form
        //h1
        //3x fieldset
        //1x button


//-----------------------------------------------------------------        
//CRIAÇÃO ELEMENTOS - JÁ COM VARIÁVEIS
const formulario = document.createElement("form");
    const tituloForm = document.createElement("h1");

    const campoForm1 = document.createElement("fieldset");
        const legendCampo1 = document.createElement("legend");
        const inputCampo1 = document.createElement("input");
    
    const campoForm2 = document.createElement("fieldset");
        const legendCampo2 = document.createElement("legend");
        const inputCampo2 = document.createElement("input");
        
    const campoForm3 = document.createElement("fieldset");
        const legendCampo3 = document.createElement("legend");    
        const inputCampo3 = document.createElement("input");
    
    const btnForm = document.createElement("button");

    const modalContainer = document.createElement("div");
    const cardPreview = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitulo = document.createElement("h3");
    const cardText = document.createElement("p");
    const cardConfirmar = document.createElement("button");
    const cardCancelar = document.createElement("button");


//------------------------------------------------------------------------ 
//EDITANDO ATRIBUTOS DOS ELEMENTOS

formulario.classList.add("nes-container");
formulario.classList.add("is-dark");
    
    tituloForm.insertAdjacentText("afterbegin", "Meu Baralho");
    
    campoForm1.setAttribute("type", "text");   
        legendCampo1.insertAdjacentText("afterbegin", "Título");    
        inputCampo1.setAttribute("placeholder", "Insira um título"); 
        inputCampo1.setAttribute("maxlength", "25");
        
    campoForm2.setAttribute("type", "text");
        legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        inputCampo2.setAttribute("placeholder", "Insira uma descrição");
        inputCampo2.setAttribute("maxlength", "25");
    
    campoForm3.setAttribute("type", "file"); //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
        legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        inputCampo3.setAttribute("placeholder", "Insira a URL da imagem");
        inputCampo3.setAttribute("type", "text");
        // QUANTO DE LIMITE DE CARACTERES?
        //inputCampo3.setAttribute("maxlength", "25")

    btnForm.setAttribute("type", "submit");

    //btnForm.setAttribute('onclick', 'adicionarCarta()')
    //CHAMAR 'adicionarCarta()' dentro do btnConfirmar do modal
    
    btnForm.insertAdjacentText("afterbegin", "Enviar");


//------------------------------------------------------------------------ 
//ATRIBUIÇÃO DE CLASSES E ARMAZENAMENTO DE CLASSES EM VARIÁVEIS
campoForm1.className = "campo-formulario";
campoForm2.className = "campo-formulario";
campoForm3.className = "campo-formulario";
const cCampo = document.getElementsByClassName("campo-formulario");

legendCampo1.className = "legend-formulario";
legendCampo2.className = "legend-formulario";    
legendCampo3.className = "legend-formulario";
const cLegend = document.getElementsByClassName("legend-formulario");

inputCampo1.className = "input-formulario";     
inputCampo2.className = "input-formulario";
inputCampo3.className = "input-formulario";
const cInput = document.getElementsByClassName("input-formulario");

btnForm.className = "nes-btn is-warning";

modalContainer.clasName = "card-modal";
modalContainer.id = "modal"
const cCardModal = document.getElementsByClassName("card-modal");

cardPreview.className = "card-preview";
const cCardPreview = document.getElementsByClassName("card-preview");

cardImg.className = "card-img";
const cCardImg = document.getElementsByClassName("card-img");

cardTitulo.className = "card-titulo";
const cCardTitulo = document.getElementsByClassName("card-titulo");

cardText.className = "card-text"
const cCardText = document.getElementsByClassName("card-text");

cardConfirmar.className = "card-confirmar"
const cCardConfirmar = document.getElementsByClassName("card-confirmar");

cardCancelar.className = "card-cancelar"
const cCardCancelar = document.getElementsByClassName("card-cancelar");




//------------------------------------------------------------------------ 
//APENSANDO ELEMENTOS

document.body.appendChild(formulario);
           
    formulario.appendChild(tituloForm);
    
    formulario.appendChild(campoForm1);
        campoForm1.appendChild(legendCampo1);
        campoForm1.appendChild(inputCampo1);
    
    formulario.appendChild(campoForm2);
        campoForm2.appendChild(legendCampo2);
        campoForm2.appendChild(inputCampo2);
    
    formulario.appendChild(campoForm3);
        campoForm3.appendChild(legendCampo3);
        campoForm3.appendChild(inputCampo3);
    
document.body.appendChild(btnForm);

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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        background-image: url(../imgs/background.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    `

    formulario.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding-bottom: 3rem;
    `

        tituloForm.style.cssText=`
            font-size: 1.8rem;
        `
        
        //ESTILO FIELDSET
        for (let i = 0; i < cCampo.length; i++) {
            cCampo[i].style.cssText=`
                border: .3rem solid #FFC9725B;
                font-size: 1.2rem;
                `      
        }

        campoForm1.style.cssText = `
            margin-top: 3rem;
            border: .3rem solid #FFC9725B;
            font-size: 1.2rem;
        `
        
        //ESTILO LEGEND
        for (let i = 0; i < cLegend.length; i++) {
            cLegend[i].style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: .5rem;
                font-size: 1.4rem;
            `      
        }
    
        //ESTILO INPUT
        for (let i = 0; i < cInput.length; i++) {
            cInput[i].style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 1rem 2rem 2rem 1rem;
                width: 95%;
                color: #FFFFFF;
                text-align: center;
                font-size: 1.5rem;
            `      
        }

        btnForm.style.cssText=`
            font-size: 1.5rem;
            border-image-repeat: stretch;
            width: 16rem;
        `
        
        let listaDeCartas = localStorage.getItem("listaDeCartas");

        if(listaDeCartas ==null){
            listaDeCartas = []
          localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        } else {
            listaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"))
        }
        
        
        // function adicionarCarta(){
        //   if (inputCampo1.value != '' && inputCampo2.value != '' && inputCampo3.value != '') {
        //     let dadosNovaCarta=
        //       {
        //         id: '',
        //         titulo: inputCampo1.value,
        //         url: inputCampo3.value,
        //         descricao: inputCampo2.value,
        //       }

        //     listaDeCartas.push(dadosNovaCarta);
        //     localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        //     location.href = './index.html';
        //   }else{
        //     alert("Verifique se a URL inserida é válida (.png ou .jpg) e se todos os campos estão preenchidos.")
        //   }
        // }