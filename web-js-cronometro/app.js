let contador = 0;
let objetoTimer;

function empezarCrono(){
    setInterval(aumentarCrono,1000);
}

function aumentarCrono(){
    contador++;
    document.getElementById("crono").innerHTML = contador;
    
}

function pararCrono(){
    window.clearInterval(objetoTimer);
}

function restablecerCrono(){
    contador = 0;
    document.getElementById("crono").innerHTML = contador;
}
