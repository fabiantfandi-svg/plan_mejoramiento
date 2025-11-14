let fabian = ["manzana", "pera", "mandarina"];//creo un array con  tres libros

console.log("frutas:", fabian.length); //los muestro incicialmente

fabian.push("melon");  
fabian.push("durazno");  
fabian.push("melocoton");  
fabian.push("uva");//agrego varias frutas
console.log("Después de push:", fabian.length); //muestro cuantos elementos tiene el array
console.log("frutas: ", fabian);//muestro editado con push

let david = fabian.pop();//elimino el ultimo elemento
console.log("fruta removida:", david); //lo muestro con el elemento eliminado
console.log("frutas finales:", fabian.length); //muestro cuantos elementos tiene el array