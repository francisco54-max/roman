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