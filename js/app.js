//MAPA SIMPLIFICADO
//div macro
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


//----------------------------------------------------------------- 
//EDITANDO ATRIBUTOS DOS ELEMENTOS

formulario.classList.add("nes-container");
formulario.classList.add("is-dark");
    
    tituloForm.insertAdjacentText("afterbegin", "Formulário");
    
    campoForm1.setAttribute("type", "text");   
        legendCampo1.insertAdjacentText("afterbegin", "Título");    
        inputCampo1.setAttribute("placeholder", "Insira um título"); 
        inputCampo1.setAttribute("maxlength", "25");
        
    campoForm2.setAttribute("type", "text");
    //campoForm2.setAttribute("placeholder", "Descrição");
        legendCampo2.insertAdjacentText("afterbegin", "Descrição");
        inputCampo2.setAttribute("placeholder", "Insira uma descrição");
        inputCampo2.setAttribute("maxlength", "25");
        //MUDAR DE INPUT PARA TEXT AREA
    
    campoForm3.setAttribute("type", "file"); //ESTUDAR HIPÓTESE DE TER 2 TIPOS DE INPUT DE IMAGEM: FILE E TEXT (URL)
    campoForm3.setAttribute("placeholder", "URL da Imagem");
        legendCampo3.insertAdjacentText("afterbegin", "Imagem");
        inputCampo3.setAttribute("type", "file")
        inputCampo3.setAttribute("accept", ".jpg, .png, .svg, .bmp");
        btnFake.insertAdjacentText("afterbegin", "Insira uma imagem");

    btnForm.setAttribute("type", "submit");
    btnForm.insertAdjacentText("afterbegin", "Enviar");


//----------------------------------------------------------------- 
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


//----------------------------------------------------------------- 
//STYLE

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
        height: 70vh;
    `

        campoForm1.style.cssText=`
            border: 3px solid #FFC9725B;
            width: 85%;
        `
            
        //width: fit-content -> não rola com Firefox Dev Ed.
            legendCampo1.style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: 15px;
            `

            inputCampo1.style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 10px 20px 20px 20px;
                width: 95%;
                color: #FFFFFF;
            `

        campoForm2.style.cssText=`
            border: 3px solid #FFC9725B;
            width: 85%;
        `
            
            legendCampo2.style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: 15px;
            `

            inputCampo2.style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 10px 20px 20px 20px;
                width: 95%;
                color: #FFFFFF;
            `

        campoForm3.style.cssText=`
            border: 3px solid #FFC9725B;
            width: 85%;
            display: flex;

        `
            
            legendCampo3.style.cssText=`
                display: inline-block;
                width: fit-content;
                margin-left: 15px;
            `

            inputCampo3.style.cssText=`
                border: none;    
                outline: none;
                background-color: #212529;
                padding: 10px 20px 20px 20px;
                width: 95%;
                position: relative;
                z-index: 2;
                opacity: 0;
            `
            //OBS.: Removi a cor, se tornou desnecessária considerando que o btn vai ficar com opacity: 0.
            
            // opacity: 0; --> GAMBIARRA QUE SOLUCIONA. USAR Z-INDEX (e position relative) CASO FOR COLOCAR UM BOTÃO DESTILIZADO NO LUGAR. ASSIM, O USUÁRIO CLICARÁ SEMPRE NO INPUT.
            //display: none; --> OUTRA GAMBIARRA QUE SOLUCIONA. AQUI EU MATO O INPUT, TERIA QUE CRIAR UMA OUTRA DIV, COM COMPORTAMENTO IDÊNTICO, PARA SUBSTITUÍ-LO.
            //UMA TERCEIRA SOLUÇÃO SERIA VIA LABEL.

            //esse botão ainda está mal configurado. estilizei apenas para efeito de visualização.
            //Pensei em estilizar para deixar igual a um placeholder. Alternativamente, podemos deixar um botão com estilo compatível com o resto do form
            btnFake.style.cssText=`
                position: absolute;
                z-index: 1;
            `

        btnForm.style.cssText=`
            padding: 20px;
        `