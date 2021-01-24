// valor 6 puntos
alert("Empieza el ejercicio 9");
// haced que el div se mueva aleatoriamente por la pantalla hasta el final de la misma usando 
// setInterval
// para eso debéis crear una función que mueva unos píxeles a la izquierda o a la derecha y unos píxeles arriba o abajo sin salirse de los márgenes usando la propiedad
// style del div modificando adecuadamente su posición.
// window.screen.width y window.screen.height os darán el tamaño de la pantalla.
// el movimiento tiene que finalizar a los 5 segundos de haber empezado. Para eso usad un timeout para cancelar el interval
<<<<<<< HEAD

let cuadro = document.getElementById("divMovil");
console.log(`Tamaño de pantalla ${screen.width},${screen.height}`);
console.log("aquí");
let timer = setInterval(moverCuadro, 200);
setTimeout(pararMovimiento,5000);
function pararMovimiento() {
    window.clearInterval(timer);
}
function moverCuadro() {

    let posIzda = parseInt(cuadro.style.left.split("p")[0]);
    let posTop = parseInt(cuadro.style.top.split("p")[0]);

    posIzda += Math.floor(Math.random() * 601)-300;
    posTop += Math.floor(Math.random() * 601)-300;

    if (posIzda >= 0 && posIzda <= (window.screen.width - 100)) {
        cuadro.style.left = posIzda + "px";
    }
    if (posTop >= 0 && posTop <= (window.screen.height - 100)) {
        cuadro.style.top = posTop + "px";
    }

    console.log(`Tamaño de pantalla ${screen.width},${screen.height}`);
    imprimirPosicion();

}


function imprimirPosicion() {
    let posIzda1 = parseInt(cuadro.style.left.split("p")[0]);
    let posTop1 = parseInt(cuadro.style.top.split("p")[0]);
    console.log(`Posición (${posIzda1},${posTop1})`);
}
=======
>>>>>>> 083c977da18e3fb29ad80490cdcb9eb6a6f68b5b
