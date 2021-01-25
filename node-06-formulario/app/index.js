const express = require('express');
const app = express();
const path = require('path');

app.set('puerto', 3000);

app.get('/', 
    function (req,res) {
        res.sendFile( path.join(__dirname, "form.html");

             
    }
);



app.listen(app.get('puerto'), inicioServidor());

function inicioServidor() {
    console.log(
        `Servidor iniciado en 
http://localhost:${app.get("puerto")}`);
}