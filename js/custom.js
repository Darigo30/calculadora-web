//variales numeros
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");

//variables operaciones
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
let visor = document.getElementsByClassName("visor");
const limpiar = document.getElementById("limpiar");
const resultado = document.getElementById("resultado");
let visorContenido = "";
let operacion ="";

//eventos de click
uno.addEventListener("click", function () {
  visor[0].textContent += uno.textContent;
});

dos.addEventListener("click", function () {
  visor[0].textContent += dos.textContent;
});

tres.addEventListener("click", function () {
    visor[0].textContent += tres.textContent;
});

cuatro.addEventListener("click", function () {
    visor[0].textContent += cuatro.textContent;
});

cinco.addEventListener("click", function () {
    visor[0].textContent += cinco.textContent;
});

seis.addEventListener("click", function () {
    visor[0].textContent += seis.textContent;
});

siete.addEventListener("click", function () {
    visor[0].textContent += siete.textContent;
});

ocho.addEventListener("click", function () {
    visor[0].textContent += ocho.textContent;
});

nueve.addEventListener("click", function () {
    visor[0].textContent += nueve.textContent;
});

cero.addEventListener("click", function () {
    visor[0].textContent += cero.textContent;
});

limpiar.addEventListener("click", function () {
    visor[0].textContent = "";
});

//funciones
const sumar = function() {
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
    operacion="+";
}
const restar = function() {
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
    operacion="-";
}
const multiplicar = function() {
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
    operacion="*";
}
const dividir = function() {
    visorContenido = visor[0].textContent;
    visor[0].textContent = "";
    operacion="/";
}
const result = function() {
    switch(operacion){
        case "+":
            visor[0].textContent = +visorContenido + Number(visor[0].textContent);
        break;

        case "-":
            visor[0].textContent = +visorContenido - Number(visor[0].textContent);
        break;

        case "*":
            visor[0].textContent = +visorContenido * Number(visor[0].textContent);
        break;

        case "/":
            visor[0].textContent = +visorContenido / Number(visor[0].textContent);
        break;
    }
}
//eventos click que llaman las  funciones
suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
multiplicacion.addEventListener("click", multiplicar);
division.addEventListener("click", dividir);
resultado.addEventListener("click", result);

