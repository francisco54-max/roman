function imprimirEn1(txt){
    document.getElementById("resultado1").innerHTML = txt;
}
function imprimirEn2(txt){
    document.getElementById("resultado2").innerHTML = txt;
}

function imprimirFin(){
    document.getElementById("resultado1").innerHTML = "FIN";
    document.getElementById("resultado2").innerHTML = "FIN";
}

// Esta funcion, multiplica los dos primeros parametros y llama a la funcion
// pasada com 3er parametro

function multiplicacionConCallback(num1, num2, funcionCallback){
    let resultado = num1*num2;
    funcionCallback(resultado);
}

multiplicacionConCallback(3,4,imprimirEn1);
multiplicacionConCallback(34,7,imprimirEn2);
multiplicacionConCallback(3,3,alert)
multiplicacionConCallback(5,4,console.error)
multiplicacionConCallback(5,6,console.log)
setTimeout(imprimirFin,3000);
setTimeout(multiplicacionConCallback,1000,5,5,imprimirEn1);