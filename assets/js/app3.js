document.addEventListener("DOMContentLoaded", function() {
 
 let sumar = document.getElementById('btn-sumar');
 let restar = document.getElementById('btn-restar');


    sumar.addEventListener("click", function() {
        let valor1= document.querySelector('#valor1').value;
        let valor2= document.querySelector('#valor2').value;
        valor1 = isNaN(valor1) ? 0 : parseInt(valor1);                  
        valor2 =isNaN(valor2) ? 0 : parseInt(valor2);
        document.querySelector(".resultado").innerHTML= (parseInt(valor1) + parseInt(valor2));
        
    });

    restar.addEventListener("click", function() {
        let valor1= document.querySelector('#valor1').value;
        let valor2= document.querySelector('#valor2').value;
        valor1 = isNaN(valor1) ? 0 : parseInt(valor1);                  
        valor2 =isNaN(valor2) ? 0 : parseInt(valor2);
        let resultado = valor1 - valor2;
        if (resultado < 0) {
            resultado = 0;
        }
        document.querySelector(".resultado").innerHTML= resultado;

    });


});