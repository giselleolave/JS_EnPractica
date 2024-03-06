
limpiarErrores();
let formulario = document.getElementById( "formulario");

formulario.addEventListener( "submit",function(event) {
    event.preventDefault();
    
    let textNombre =document.querySelector("#nombre").value;
    let textAsunto =document.querySelector("#asunto").value;
    let textMensaje =document.querySelector("#mensaje").value;
    let resultado = validar(textNombre,textAsunto,textMensaje);
    if(resultado == true) {
    exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML= "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML= "";
    };
    

    
function exito() {
    document.querySelector(".resultado").innerHTML= "Mensaje enviado con éxito";
    };
    function validar(nombre,asunto,email) {

        let pasamosLaValidacion = true;
        let validacionNombre =  /[a-zA-Z]/gim;
        
        if (validacionNombre.test(nombre) == false) {
         document.querySelector(".errorNombre").innerHTML = "El nombre es requerido"
         pasamosLaValidacion = false;
        };
        let validacionAsunto = /[a-zA-Z]/gim;
        if (validacionAsunto.test(asunto) == false) {
         document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
         pasamosLaValidacion = false;
        };
        let validacionMensaje = /[a-zA-Z]/gim;
        
        if (validacionMensaje.test(email) == false ) {
         document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido"
         pasamosLaValidacion = false;
        };
        return pasamosLaValidacion;
        };