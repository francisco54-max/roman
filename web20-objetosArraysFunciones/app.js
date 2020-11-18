let string1 = "hola munndo";
let string2 = string1;

string2 ="Hola mundo";
console.log(string2);
console.log(string1);
let array1 = [4,5,6,7,8,9,10];
let array2 = array1;
array1[0]=5;

console.log(array1);
console.log(array2);

let objeto1 = {
    "propiedad1" : 3,
    "propiedad2" : "Hola"
}

let objetoclon = { ...objeto1};

objetoclon.propiedad1 = 10;

let objeto2 = objeto1;

objeto2.propiedad1 = 5;

console.log(objeto2);
console.log(objeto1);
console.log(objetoclon);

let objetoA = {
    "p1" : 4,
    "prop2" :"HOla",
    "pr3" : true
}

let objetoB = {
    "p4" : 4,
    "prop2" :"Hala",
    "pr6" : true
}
let simple = [4,5,6,7,8];

let objetoAB = { ...objetoB, ...objetoA};

console.log(objetoAB);

let doble = simple.map( x => x*2 );

let numGrandes = simple.filter( elemento => elemento > 6 );

let numGrandes2 = simple.filter( function (e){
    return e>6;
});

function doblar(x){
    return x*2;
}

console.log(simple);
console.log(doble);

console.log(numGrandes);
console.log(numGrandes2);

//crear un array con nombres de mujeres
//con map crear otro array que añada "Doña" delante de cada nombre
let nombreMujeres = ["Susana","Rocio","Aguadulce","Sara","Eva"];
let apelativos = nombreMujeres.map (nombre => "Dña "+nombre);

console.log(apelativos);
console.log(nombreMujeres);

//filtrar los nombres cortos y ponerlos en otro array

let nombrecortos = nombreMujeres.filter( nombre => nombre.length <5);

console.log(nombrecortos);

// function reduce

let arrayNumeros= [4,5,6,23,2,16,8,7];
let suma = arrayNumeros.reduce( (a,b) => a+b);console.log(suma);

console.log(suma);

let n = 2;
let esPar = (n%2==0) ?true:false;

if (n%2 == 0){
    esPar = true;
}else{
    esPar = false;
}
console.log("n es dos? "+ (n==2?"Si":"No"));

let maximo = arrayNumeros.reduce((a,b) => a>b?a:b);
console.log(maximo);

let avg = suma/arrayNumeros.length;
console.log(avg);

let numerosordenados = arrayNumeros.sort(comparacion);
console.log(numerosordenados);

function comparacion(x,y){
    if(x<y){
        return -1;
    }else if(x>y){
        return 1;
    }else{
        return 0;
    }
}

let coches = [
    {
        "marca": "Fiat",
        "modelo": "Uno",
        "anyo": 1990
    },
    {
        "marca": "Fiat",
        "modelo": "Punto",
        "anyo": 1995
    },
    {
        "marca": "Citroen",
        "modelo": "AX",
        "anyo": 1991
    },
    {
        "marca": "Volvo",
        "modelo": "S80",
        "anyo": 1989
    }
]
let cochesOrdenados = coches.sort(
    
    function(coche1,coche2){
        if (coche1.anyo < coche2.anyo){
            return -1;
        }else if (coche1.anyo > coche2.anyo){
            return 1;
        }else{
            return 0;
        }
    }
);

console.log(cochesOrdenados2);

let cochesOrdenados2 = coches.sort(
    
    function(coche1,coche2){
        if (coche1.marca < coche2.marca){
            return -1;
        }else if (coche1.marca > coche2.marca){
            return 1;
        }else{
            return 0;
        }
    }
);

console.log(cochesOrdenados2);