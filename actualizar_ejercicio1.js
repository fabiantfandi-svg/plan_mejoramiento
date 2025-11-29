
// Importo fs para modificar archivos existentes
import fs from "fs";

// Leo el archivo existente
let Fabian = fs.readFileSync("archivo1.txt", "utf8");

// Agrego texto adicional
let David = Fabian + "\nEsta línea fue añadida después.";

// Escribo nuevamente el archivo actualizado
fs.writeFileSync("archivo1.txt", David);

// Confirmo la actualización
console.log("archivo1.txt actualizado correctamente.");
