const mensaje1 = "¿Quieres cambiar el contenido del parrafo?";
const mensaje2 = "¿Quieres añadir un parrao?";
const mensaje3 = "¿Quieres crear una lista?"

let parrafo1 = document.getElementById("p1");

console.log(parrafo1.innerHTML);

if (confirm(mensaje1)){
    parrafo1.innerHTML = "Contenido cambiado";
}

function crearParrafo(){
    if (confirm(mensaje2)){
    let parrafoNuevo = document.createElement("p");
    document.body.appendChild(parrafoNuevo);
    parrafoNuevo.innerHTML = "Hola parrafo";
    parrafoNuevo.id = "pn"
    parrafoNuevo.className = "advertencia"
    }
}
if (confirm(mensaje3)){
    let lista = document.createElement("ul");
    document.body.appendChild(lista);
    for (let i = 0; i < 5; i++){
        let elementoLista = document.createElement("li");
        elementoLista.innerHTML = "Elemento numero " + (i + 1);
        lista.appendChild(elementoLista);
    }
}


