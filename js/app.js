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
        const btnFake = document.createElement("button");
    
    const btnForm = document.createElement("button");


//------------------------------------------------------------------------ 
//EDITANDO ATRIBUTOS DOS ELEMENTOS

formulario.classList.add("nes-container");
formulario.classList.add("is-dark");
    
    tituloForm.insertAdjacentText("afterbegin", "Formulário");
    
    campoForm1.setAttribute("type", "text");   
        legendCampo1.insertAdjacentText("afterbegin", "Título");    
        inputCampo1.setAttribute("placeholder", "Insira um título"); 
        inputCampo1.setAttribute("maxlength", "25");
        
    campoForm2.setAttribute("type", "text");
        legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        inputCampo2.setAttribute("placeholder", "Insira uma descrição");
        inputCampo2.setAttribute("maxlength", "25");
        //MUDAR DE INPUT PARA TEXT AREA
    
    campoForm3.setAttribute("type", "file"); //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
        legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        //LABEL PARA RESOLVER?
        // inputCampo3.setAttribute("type", "text")
        // inputCampo3.setAttribute("accept", ".jpg, .png, .svg, .bmp")
        
        //inputCampo3.setAttribute("maxlength", "25"); PENSAR QUE IMG PODE TEM MUITO CARACTERE EM SUA URL.
        inputCampo3.setAttribute("type", "text")
        // inputCampo3.setAttribute("accept", ".jpg, .png, .svg, .bmp");
        btnFake.insertAdjacentText("afterbegin", "Insira uma imagem");

    btnForm.setAttribute("type", "submit");
    btnForm.setAttribute('onclick', 'adicionarCarta()')
    btnForm.insertAdjacentText("afterbegin", "Enviar");


//------------------------------------------------------------------------ 
//ATRIBUIÇÃO DE CLASSES E ARMAZENAMENTO DE CLASSES EM VARIÁVEIS
campoForm1.className = "campo-formulario";
campoForm2.className = "campo-formulario";    
const classeCampo = document.getElementsByClassName("campo-formulario");

legendCampo1.className = "legend-formulario";
legendCampo2.className = "legend-formulario";    
legendCampo3.className = "legend-formulario";
const classeLegend = document.getElementsByClassName("legend-formulario");

inputCampo1.className = "input-formulario";     
inputCampo2.className = "input-formulario";
const classeInput = document.getElementsByClassName("input-formulario");


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
        campoForm3.appendChild(btnFake);
    
    formulario.appendChild(btnForm);
    

//------------------------------------------------------------------------ 
//STYLE

//SETANDO A PÁGINA
document.querySelector("*").style.cssText = `
    padding: 0;
    margin: 0;
    font-size: 10px;
    box-sizing: border-box;
`

    formulario.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4.5%;
        height: 75vh;
    `
        
        //SUBSTITUÍDOS BLOCOS DE CÓDIGO DE ESTILIZAÇÃO REPETIDOS POR FOR
        //PS.: getElementsByClassName RETORNA HTMLCollection, QUE NÃO É ARRAY, MAS SE COMPORTA COMO SE O FOSSE. EX.: FOREACH NÃO SE APLICA, MAS LENGTH, SIM.

        //ESTILO FIELDSET 1 E 2
        for (let i = 0; i < classeCampo.length; i++) {
            classeCampo[i].style.cssText=`
                border: 3px solid #FFC9725B;
                width: 85%;
                `      
        }
        
        //ESTILO LEGEND 1 A 3
        for (let i = 0; i < classeLegend.length; i++) {
            classeLegend[i].style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: 15px;
            `      
        }
    
        //ESTILO INPUT 1 E 2
        for (let i = 0; i < classeInput.length; i++) {
            classeInput[i].style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 10px 20px 20px 20px;
                width: 95%;
                color: #FFFFFF;
                text-align: center;
            `      
        }

        //EXCEÇÕES ÀS REGRAS ACIMA: ESTILOS FIELDSET 3 E INPUT 3
         campoForm3.style.cssText=`
            border: 3px solid #FFC9725B;
            width: 85%;
            display: flex;
            flex-direction: column;
            align-items: center;
        `

            inputCampo3.style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 10px 20px 20px 20px;
                width: 95%;
                position: relative;
                z-index: 2;
                opacity: 1;
            `
            //OBS.: Removi a cor, se tornou desnecessária considerando que o btn vai ficar com opacity: 0.
            
            //OPÇÕES DE GAMBIARRA PARA SOLUCIONAR BTN DA IMG

            // 01: opacity: 0; --> GAMBIARRA QUE SOLUCIONA. USAR Z-INDEX (e position relative) CASO FOR COLOCAR UM BOTÃO DESTILIZADO NO LUGAR. ASSIM, O USUÁRIO CLICARÁ SEMPRE NO INPUT.
            // 02: display: none; --> OUTRA GAMBIARRA QUE SOLUCIONA. AQUI EU MATO O INPUT, TERIA QUE CRIAR UMA OUTRA DIV, COM COMPORTAMENTO IDÊNTICO, PARA SUBSTITUÍ-LO.
            // 03: UMA TERCEIRA SOLUÇÃO SERIA VIA LABEL.

            //esse botão ainda está mal configurado. estilizei apenas para efeito de visualização.
            //Pensei em estilizar para deixar igual a um placeholder. Alternativamente, podemos deixar um botão com estilo compatível com o resto do form
            btnFake.style.cssText=`
                position: absolute;
                z-index: 1;
                padding: 10px 20px 20px 20px;
                width: 95%;
                color: #FFFFFF;
                margin-right: 3.8%;
                background-color: rgb(33, 37, 41);
                color: rgb(113, 113, 113);
                border: none;
            `

        btnForm.style.cssText=`
            padding: 15px;
        `
        
        let listaDeCartas = localStorage.getItem("listaDeCartas");

        if(listaDeCartas ==null){
            listaDeCartas = []
          localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
        } else {
            listaDeCartas = JSON.parse(localStorage.getItem("listaDeCartas"))
        }
        
        
        function adicionarCarta(){
          if (inputCampo1.value != '' && inputCampo2.value != '' && inputCampo3.value != '') {
            let dadosNovaCarta=
              {
                id: '',
                titulo: inputCampo1.value,
                url: inputCampo3.value,
                descricao: inputCampo2.value,
              }

            listaDeCartas.push(dadosNovaCarta);
            localStorage.setItem("listaDeCartas", JSON.stringify(listaDeCartas));
            location.href = './index.html';
          }else{
            alert("Verifique se a URL inserida é válida (.png ou .jpg) e se todos os campos estão preenchidos.")
          }
        }