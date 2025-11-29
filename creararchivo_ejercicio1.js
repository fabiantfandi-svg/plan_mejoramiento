// Aquí importo fs porque necesito manipular archivos
import fs from "fs";

// Quiero crear un archivo con un texto simple
let Fabian = "Este es mi primer archivo creado desde Node.";

// Uso writeFileSync porque quiero que sea inmediato
fs.writeFileSync("archivo1.txt", Fabian);

// Confirmo en consola
console.log("Archivo 1 creado correctamente.");
