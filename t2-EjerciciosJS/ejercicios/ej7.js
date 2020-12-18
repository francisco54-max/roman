// valor 5 puntos
alert("Empieza el ejercicio 7");
// No tocar esta función
<<<<<<< HEAD
function sleep(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

async function crearyRellenarListaElementos() {
=======
function sleep(segundos){
    return new Promise(resolve => setTimeout(resolve,segundos*1000));
}

async function crearyRellenarListaElementos(){
>>>>>>> 083c977da18e3fb29ad80490cdcb9eb6a6f68b5b
    alert("comenzar");
    /// completad esta función para que cree una <ol> de ej7.html
    // usando la función sleep de la siguiente manera:
    // await sleep(num_segundos);
    // cread en un bucle, 10 elementos de lista dentro de la ol, en los que ponga la hora, segundos incluidos distanciados por 
    // un número de segundos aleatorio entre 1 y 3.
<<<<<<< HEAD
    let ol = document.createElement("ol");
    document.body.appendChild(ol);

    for (let i = 0; i < 10; i++) {
        console.log("En el for");
        let li = document.createElement("li");
        li.innerHTML = new Date();
        console.log(li);
        await sleep(Math.floor((Math.random() * 3 + 1)));
        ol.appendChild(li);
    }
=======


>>>>>>> 083c977da18e3fb29ad80490cdcb9eb6a6f68b5b
}

crearyRellenarListaElementos();