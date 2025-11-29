// Uso este array para practicar la combinación de métodos
let Fabian = [1, 2, 3, 4, 5, 6];

// Primero multiplico por 3, luego filtro solo los mayores a 10
let David = Fabian
    .map(function(Fabian1) {
        return Fabian1 * 3; // Aquí multiplico por 3 cada valor
    })
    .filter(function(Fabian2) {
        return Fabian2 > 10; // Aquí elimino los números pequeños
    });

// Muestro el resultado final
console.log(David);
