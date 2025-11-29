
// Importo fs porque voy a leer un archivo
import fs from "fs";

// Leo el archivo de texto
let Fabian = fs.readFileSync("archivo1.txt", "utf8");

// Cuento cuántos caracteres tiene el contenido
let David = Fabian.length;

// Muestro los resultados
console.log("Contenido leído:", Fabian);
console.log("Cantidad de caracteres:", David);
