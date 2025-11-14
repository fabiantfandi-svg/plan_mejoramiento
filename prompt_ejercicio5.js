
let fabian = prompt("Ingrese primer valor:");
let david = prompt("Ingrese segundo valor:");
//pide ingresar dos numeros
let torres = parseInt(fabian, 10);
let fandiño = parseInt(david, 10);
//los vuelve enteros con base 10
if (isNaN(torres) || isNaN(fandiño)) {//verifica si ingreso numeros
alert("Por favor ingrese números válidos");
} else {
let FDTF = torres + fandiño;//los suma
alert(`El resultado de ${torres} + ${fandiño} = ${FDTF}`);//los muestra
}