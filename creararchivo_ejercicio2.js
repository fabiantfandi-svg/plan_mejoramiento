// Importo fs para escribir archivos nuevamente
import fs from "fs";

// Decidí escribir varias líneas para practicar
let David = "Línea 1\nLínea 2\nLínea 3";

// Creo el archivo con ese contenido
fs.writeFileSync("archivo2.txt", David);

// Confirmo la creación
console.log("Archivo 2 creado con varias líneas.");
