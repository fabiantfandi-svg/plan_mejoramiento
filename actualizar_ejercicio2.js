// Importo fs para actualizar un JSON
import fs from "fs";

// Leo el archivo JSON
let Torres = fs.readFileSync("datos.json", "utf8");

// Lo convierto a objeto
let Fandiño = JSON.parse(Torres);

// Modifico el contenido
Fandiño.edad = 23;  // actualizo un valor

// Lo vuelvo a convertir a texto JSON
let Fabian1 = JSON.stringify(Fandiño, null, 2);

// Sobrescribo el archivo
fs.writeFileSync("datos.json", Fabian1);

// Confirmo la modificación
console.log("JSON actualizado correctamente.");
