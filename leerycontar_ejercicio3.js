// Importo fs porque quiero leer un JSON
import fs from "fs";

// Leo el archivo JSON
let Fabian = fs.readFileSync("datos.json", "utf8");

// Convierto el JSON a objeto
let David = JSON.parse(Fabian);

// Muestro el objeto resultante
console.log("Información del JSON:", David);
