//valor 5
alert("Empieza el ejercicio 6");
/*
Tenemos una serie de objetos como los que siguen:

{ 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "casado": true
}


Son objetos persona en los que nombre y apellido deben ser un string, edad un number y casado un boolean.

Crea una función que, pasado un objeto persona nos devuelva true si todas sus propiedades cumplen las condiciones de la línea anterior y false en caso de que alguna no la cumpla.

Por cada propiedad que no cumpla con el tipo que se le espera, se deberá escribir en la consola de error mediante console.error("Mensaje de error") informando en el mensaje de error de cuál es el tipo y cuál se esperaba.

Por ejemplo: El código siguiente

let persona1 = { 
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": "63",
  "casado": [true]
}

comprobarPersona(persona1);
deberá mostrar error en la edad y en la propiedad "casado".
//

*/

function comprobarPersona(p) {
<<<<<<< HEAD
  let ret = true;
  if (typeof p.nombre !== "string") {
    console.error(`La propiedad nombre es un ${typeof p.nombre} y se esperaba un string`);
    ret = false;
  }
  if (typeof p.apellido !== "string") {
    console.error(`La propiedad apellido es un ${typeof p.apellido} y se esperaba un string`);
    ret = false;
  }
  if (typeof p.edad !== "number") {
    console.error(`La propiedad edad es un ${typeof p.edad} y se esperaba un number`);
    ret = false;
  }
  if (typeof p.casado !== "boolean") {
    console.error(`La propiedad casado es un ${typeof p.casado} y se esperaba un boolean`);
    ret = false;
  }
  return ret;
}

let persona1 = {
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": "63",
  "casado": [true]
}

let persona2 = {
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "casado": true
}


let persona3 = {
  "nombre": "Juan Luis",
  "apellido": "Guerra",
  "edad": 63,
  "dni": "18181818G",
  "casado": true
}
console.log(comprobarPersona(persona1));
console.log(comprobarPersona(persona2));
console.log(comprobarPersona(persona3));
=======

}
>>>>>>> 083c977da18e3fb29ad80490cdcb9eb6a6f68b5b

