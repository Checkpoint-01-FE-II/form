//-----------------------------------------------------------------        
//CRIAÇÃO ELEMENTOS - JÁ COM VARIÁVEIS
const main = document.createElement("main");
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
        
        const btnConfirmar = document.createElement("button");
        const btnCancelar = document.createElement("button");

//------------------------------------------------------------------------ 
//APENSANDO ELEMENTOS

document.body.appendChild(main);
    
    main.appendChild(formulario);
           
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
    
document.body.appendChild(btnConfirmar);
document.body.appendChild(btnCancelar);


//----------
//MODAL
//document.body.appendChild(modal);


//------------------------------------------------------------------------ 
//EDITANDO ATRIBUTOS DOS ELEMENTOS
  
    tituloForm.insertAdjacentText("afterbegin", "Meu Baralho");
    
    campoForm1.setAttribute("type", "text");   
        legendCampo1.insertAdjacentText("afterbegin", "Título");    
        inputCampo1.setAttribute("placeholder", "Insira título"); 
        inputCampo1.setAttribute("maxlength", "25");
        
    campoForm2.setAttribute("type", "text");
        legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        inputCampo2.setAttribute("placeholder", "Insira descrição");
        inputCampo2.setAttribute("maxlength", "25");
    
    campoForm3.setAttribute("type", "file"); //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
        legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        inputCampo3.setAttribute("placeholder", "Insira URL");
        inputCampo3.setAttribute("type", "text");
        // QUANTO DE LIMITE DE CARACTERES?
        //inputCampo3.setAttribute("maxlength", "25")

    btnConfirmar.setAttribute("type", "submit");
    //btnConfirmar.setAttribute('onclick', 'document.getElementById("modal").style.display="block"');
    
    //btnForm.setAttribute('onclick', 'adicionarCarta()')
    //CHAMAR 'adicionarCarta()' dentro do btnConfirmar do modal
    btnConfirmar.insertAdjacentText("afterbegin", "Enviar");

    btnCancelar.setAttribute("type", "reset");
    btnCancelar.setAttribute("form", "formBaralho");
    btnCancelar.insertAdjacentText("afterbegin", "Cancelar");


//------------------------------------------------------------------------ 
//ATRIBUIÇÃO DE CLASSES E IDs

formulario.id = "formBaralho";
formulario.classList.add("nes-container");
formulario.classList.add("is-dark");

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

btnConfirmar.classList.add("nes-btn");
btnConfirmar.classList.add("is-warning");

btnCancelar.classList.add("nes-btn");
btnCancelar.classList.add("is-warning");


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
            font-size: 1.6rem;
        `
        
        //ESTILO FIELDSET - cor anterior: #FFC9725B
        for (let i = 0; i < cCampo.length; i++) {
            cCampo[i].style.cssText=`
                border: .3rem solid #ffffff;
                font-size: 1rem;
                `      
        }

        campoForm1.style.cssText = `
            margin-top: 3rem;
            border: .3rem solid #ffffff;
            font-size: 1rem;
        `
        
        //ESTILO LEGEND
        for (let i = 0; i < cLegend.length; i++) {
            cLegend[i].style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: .5rem;
                font-size: 1.2rem;
            `      
        }
    
        //ESTILO INPUT
        for (let i = 0; i < cInput.length; i++) {
            cInput[i].style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 1rem 2rem 1rem 3rem;
                width: 95%;
                color: #FFFFFF;
                text-align: center;
                font-size: .9rem;
            `      
        }

        btnConfirmar.style.cssText=`
            font-size: 1.5rem;
            border-image-repeat: stretch;
            width: 16rem;
        `

        btnCancelar.style.cssText=`
            font-size: 1.5rem;
            border-image-repeat: stretch;
            width: 16rem;
            margin-top: -1.5rem;
        `


//------------------------------------------------------------------------ 
//INTERATIVIDADE        

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


//------------------------------------------------------------------------ 
//MODAL

const modalContainer = document.createElement("div");
const cardPreview = document.createElement("div");
const cardImg = document.createElement("img");
const cardTitulo = document.createElement("h3");
const cardText = document.createElement("p");
const cardBtnConfirmar = document.createElement("button");
//DEVO CRIAR CANCELAR PARA RETORNAR?
//const cardCancelar = document.createElement("button");

//-----------------------------------------------------------------

modalContainer.id = "modal"
cardPreview.classList.add("nes-container");
cardPreview.classList.add("is-dark");

cardBtnConfirmar.classList.add("nes-btn");
cardBtnConfirmar.classList.add("is-warning");


//-----------------------------------------------------------------

document.body.appendChild(modalContainer);

    modalContainer.appendChild(cardPreview);

        cardPreview.appendChild(cardImg);
        cardPreview.appendChild(cardTitulo);
        cardPreview.appendChild(cardText);
        //SEPARAR BTNS DEPOIS. CRIAR DIV?
    
    modalContainer.appendChild(cardBtnConfirmar);
        
        //modalContainer.appendChild(cardCancelar);

//-----------------------------------------------------------------

cardImg.setAttribute("src","https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png");
cardImg.setAttribute("alt","Imagem a ser exibida na carta");

cardTitulo.insertAdjacentText("afterbegin", "Título");

cardText.insertAdjacentText("afterbegin", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla reprehenderit quae sit aliquam ratione cum cumque pariatur officia, ea ipsa modi debitis dolor quasi magnam cupiditate earum. Ab, minima unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla reprehenderit quae sit aliquam ratione cum cumque pariatur officia, ea ipsa modi debitis dolor quasi magnam cupiditate earum. Ab, minima unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla reprehenderit quae sit aliquam ratione cum cumque pariatur officia, ea ipsa modi debitis dolor quasi magnam cupiditate earum. Ab, minima unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla reprehenderit quae sit aliquam ratione cum cumque pariatur officia, ea ipsa modi debitis dolor quasi magnam cupiditate earum. Ab, minima unde.");

cardBtnConfirmar.setAttribute("type", "submit");
cardBtnConfirmar.insertAdjacentText("afterbegin", "Confirmar");

//cardCancelar.setAttribute();

//-----------------------------------------------------------------

modalContainer.style.cssText=`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
width: 100%;
height: 100%;
gap: 3rem;
background-color: rgba(0,0,0,0.5);
`
//display: none;

cardPreview.style.cssText=`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`

cardTitulo.style.cssText=`
font-size: 1.6rem;
`

cardText.style.cssText=`
font-size: .9rem;
text-align: center;
`