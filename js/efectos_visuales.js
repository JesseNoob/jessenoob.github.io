const BOTON1 = document.getElementsByClassName('control1');
const BOTON2 = document.getElementsByClassName('control2');
const VENTANA1 = document.getElementsByClassName('inicioDeSesion');
const VENTANA2 = document.getElementsByClassName('crearCuenta');
const CANCELAR = document.getElementsByClassName('btnCancelar');
//Capturando Eventos cuando el primer boton es presionado
BOTON1[0].addEventListener('mousedown',presionar);
BOTON1[0].addEventListener('mousedown',mostrar);
//Capturando Eventos cuando el primer boton es soltado
BOTON1[0].addEventListener('mouseup',expandir);
BOTON1[0].addEventListener('mouseup',quitar);
/********************************************************************/
//Capturando Eventos cuando el segundo boton es presionado
BOTON2[0].addEventListener('mousedown',presionar2);
BOTON2[0].addEventListener('mousedown',mostrar2);
//Capturando Eventos cuando el segundo boton es soltado
BOTON2[0].addEventListener('mouseup',expandir2);
BOTON2[0].addEventListener('mouseup',quitar2);
//Capturando Eventos cuando es presionado el boton de cancelar
CANCELAR[0].addEventListener('click',cancelar1);
CANCELAR[1].addEventListener('click',cancelar2);
function cancelar1(){
    // console.log(CANCELAR[0]);
    // CANCELAR[0].style.display='none'
    quitar();
}
function cancelar2(){
    // console.log(CANCELAR[0]);
    // CANCELAR[0].style.display='none'
    quitar2();
}

/**Funciones para el primer boton*/
function presionar(){
    BOTON1[0].style.height='36px';
    BOTON1[1].style.height='10px';
    mostrar();
}
function expandir(){
    BOTON1[0].style.height='30px';
    BOTON1[1].style.height='30px';
    quitar();
}
function mostrar(){
    // arcade.style.Position = 'absolute';
    // arcade.style.zIndex = '-1'
    VENTANA1[0].style.display ='flex';
}
function quitar(){
    VENTANA1[0].style.display ='none';
    // arcade.style.display = 'flex';
}

/**Funciones para el segundo boton*/
function presionar2(){
    BOTON2[0].style.height='36px';
    BOTON2[1].style.height='10px';
    mostrar2();
}
function expandir2(){
    BOTON2[0].style.height='30px';
    BOTON2[1].style.height='30px';
    quitar2();
}
function mostrar2(){
    // arcade.style.Position = 'absolute';
    // arcade.style.zIndex = '-1'
    VENTANA2[0].style.display ='flex';
}
function quitar2(){
    VENTANA2[0].style.display ='none';
    // arcade.style.display = 'flex';
}
//rellenar el suelo con cuadrados.
var suelo = document.getElementById('suelo');
for(var i=0; i<=174;i++){
    var cuadro = document.createElement('div');
    cuadro.setAttribute('class', 'cuadrado'); // Asignar la clase cuadrado
    suelo.appendChild(cuadro);
}
