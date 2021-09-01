//div macro
    //form
        //h1
        //3x fieldset
        //1x button

//criação inicial dos elementos, já 
const divPrincipal = document.createElement("div");
const formulario = document.createElement("form");
const tituloForm = document.createElement("h1");
const campoForm1 = document.createElement("fieldset"); //devemos criar variáveis para fieldset ou seria possível reaproveitá-la?
const campoForm2 = document.createElement("fieldset");
const campoForm3 = document.createElement("fieldset");
const btnForm = document.createElement("button");


//editando elementos
divPrincipal.classList.add("caixaForm");
    tituloForm.innerText="Formulário";
    
    campoForm1.setAttribute("type", "text");
    campoForm1.setAttribute("placeholder", "Título");
    campoForm2.setAttribute("type", "text");
    campoForm2.setAttribute("placeholder", "Descrição");
    campoForm1.setAttribute("type", "text");
    campoForm1.setAttribute("placeholder", "URL da Imagem");

    btnForm.setAttribute("type", "submit");
    btnForm.innerText="Enviar";


//apensando elementos
document.body.appendChild(divPrincipal);
divPrincipal.appendChild(formulario);
formulario.appendChild(tituloForm);
formulario.appendChild(campoForm1);
formulario.appendChild(campoForm2);
formulario.appendChild(campoForm3);
formulario.appendChild(btnForm);



