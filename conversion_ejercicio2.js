let fabian = prompt("Ingrese un valor:");//pide ingresar un valor
let david = parseFloat(fabian);//lo transforma en tipo flotante

if (isNaN(david)) {//verifica si es numero
    console.log("El valor NO es un número.");
} else {
    console.log("El valor sí es un número. Convertido:", david);
}
