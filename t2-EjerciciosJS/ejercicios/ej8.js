//valor 5 puntos
alert("Empieza el ejercicio 8");
//formulario simple
//Cread mediante javascript 3 campos input de tipo texto y un botón al lado de cada campo en el body del archivo ej8.html
//Al hacer click sobre el input, su contenido se tendrá que borrar.
//Al hacer click sobre el botón, tendrá que mostrar un alert con el contenido del input que está a su lado.
//Para rellenar el los inputs, tendréis que hacer uso del tabulador.
for (let i = 0; i < 3; i++) {
    let p = document.createElement("p");
    let elInput = document.createElement("input");
    let elButton = document.createElement("button");
    elButton.innerHTML = "Mostrar Alert";
    elInput.addEventListener("click", borrarInput);
    elButton.addEventListener("click", mostrarAlert);
    p.appendChild(elInput);
    p.appendChild(elButton);
    document.body.appendChild(p);
}

function borrarInput(evento) {
    evento.target.value = "";
}

function mostrarAlert(evento) {
    let mensaje = evento.target.previousSibling.value;
    alert(mensaje);
}
