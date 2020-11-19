let contador = 0;
let objetoTimer;

function empezarCrono(){
    objetoTimer=setInterval(aumentarCrono,100);
}

function empezarConCuentaAtras(){
 let myPromise = new Promise ( function(CuentaAtras) {
    document.getElementById("cuentaatras").innerHTML = contador;
    if(totalTime==0){
        alert("Final");
    }else{
        totalTime-=1;
        setTimeout("CuentaAtras",100);
    }
}
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
