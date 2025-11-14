let fabian = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];//creo un array con  tres libros

console.log("Libros iniciales:", fabian.length); //los muestro incicialmente

fabian.push("Moby Dick");//con push con para agregar al final  
console.log("Después de push:", fabian.length); //muestro cuantos elementos tiene el array
console.log("Libros:", fabian);//muestro editado con push

let david = fabian.pop();//elimino el ultimo elemento
console.log("Libro removido:", david); //lo muestro con el elemento eliminado
console.log("Libros finales:", fabian.length); //muestro cuantos elementos tiene el array