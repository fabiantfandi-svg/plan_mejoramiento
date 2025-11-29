// Importo fs porque quiero eliminar un archivo
import fs from "fs";

// Defino el archivo a borrar
let David = "archivo2.txt";

// Compruebo que exista antes de eliminarlo
if (fs.existsSync(David)) {
    // Borro el archivo
    fs.unlinkSync(David);
    console.log("Archivo eliminado:", David);
} else {
    console.log("No se puede eliminar, el archivo no existe.");
}
