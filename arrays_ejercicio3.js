let fabian = ["halo", "hollow knight", "mario bros"];//creo un array con  tres libros

console.log("juegos:", fabian.length); //los muestro incicialmente

fabian.push("terraria");
fabian.push("minecraft");
fabian.push("roblox");//agrego varios juegos
console.log("Después de push:", fabian.length); //muestro cuantos elementos tiene el array
console.log("juegos: ", fabian);//muestro editado con push

let david = fabian.pop();
let torres = fabian.pop();//elimino dos juegos
console.log("juego removido:", david); //lo muestro con los elementos eliminados
console.log("juegos finales:", fabian.length); //muestro cuantos elementos tiene el array