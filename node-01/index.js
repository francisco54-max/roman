const os = require("os");
const fs = require("fs");

console.log("Tiempo encendido: " + os.uptime());
console.log("memoria total: " + os.totalmem());
console.log("tipo sistema operativo: " + os.type());

fs.readFile("./datos.json", "utf8", 
    function(err,buffer){
        console.log(buffer);
});

let persona = JSON.parse(fs.readFileSync("./datos.json", "utf-8"));

let objeto = {hola: "mundo"}

console.log(objeto);
console.log(JSON.stringify(objeto));
console.log(persona.nombre);