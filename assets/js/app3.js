document.addEventListener("DOMContentLoaded", function() {
    let sumar = document.getElementById('btn-sumar');
    let restar = document.getElementById('btn-restar');

    sumar.addEventListener("click", function() {
        let valor1 = document.querySelector('#valor1').value;
        let valor2 = document.querySelector('#valor2').value;
        
        valor1 = /^\d+$/.test(valor1) ? parseInt(valor1) : 0;
        valor2 = /^\d+$/.test(valor2) ? parseInt(valor2) : 0;
        
        document.querySelector(".resultado").innerHTML = valor1 + valor2;
    });

    restar.addEventListener("click", function() {
        let valor1 = document.querySelector('#valor1').value;
        let valor2 = document.querySelector('#valor2').value;
        
        valor1 = /^\d+$/.test(valor1) ? parseInt(valor1) : 0;
        valor2 = /^\d+$/.test(valor2) ? parseInt(valor2) : 0;
        
        let resultado = valor1 - valor2;
        if (resultado < 0) {
            resultado = 0;
        }
        
        document.querySelector(".resultado").innerHTML = resultado;
    });
});
