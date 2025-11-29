
// Importo fs para leer archivos
import fs from "fs";

// Leo el archivo 2 línea por línea
let Torres = fs.readFileSync("archivo2.txt", "utf8");

// Divido el contenido en un array de líneas
let Fandiño = Torres.split("\n");

// Muestro las líneas procesadas
console.log("Líneas encontradas:", Fandiño);
