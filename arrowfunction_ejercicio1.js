// Aquí uso una arrow function para comprobar si un número es positivo o negativo
const Fabian = (numero) => {
    // Me gusta dejar esta lógica simple pero clara
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
};

console.log(Fabian(-5));
