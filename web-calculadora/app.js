function imprimirSuma() {
    let op1 = document.getElementById("op1");
    let op2 = document.getElementById("op2");
    let resultado = suma(op1.value, op2.value);

    if (resultado != null) {
        document.getElementById("res").innerHTML= resultado;    
    }else{
        document.getElementById("res").innerHTML= "Error en los operandos";    
    }
    
}


function suma(o1, o2) {
    let resultado=0;
   
    
     if(isNaN(o1) == true ||  isNaN(o2) == true ){
        resultado = null;
     }else{
        resultado = (parseFloat(o1) +  parseFloat(o2)).toFixed(2);
     }
    return resultado;
}