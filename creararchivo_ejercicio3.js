// Importo fs porque quiero crear un archivo JSON
import fs from "fs";

// Construyo un objeto para luego guardarlo
let Torres = {
    nombre: "Fabian",
    edad: 22
};

// Lo convierto a string JSON
let Fandiño = JSON.stringify(Torres, null, 2);

// Escribo el archivo
fs.writeFileSync("datos.json", Fandiño);

// Confirmo la operación
console.log("Archivo JSON creado con éxito.");
