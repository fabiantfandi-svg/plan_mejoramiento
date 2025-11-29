// Importo fs para comprobar si un archivo existe
import fs from "fs";

// Defino el nombre del archivo a verificar
let Fabian = "archivo1.txt";

// Hago la verificación
if (fs.existsSync(Fabian)) {
    console.log("El archivo SÍ existe:", Fabian);
} else {
    console.log("El archivo NO existe:", Fabian);
}
