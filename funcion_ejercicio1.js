// En esta función analizo la edad y devuelvo una categoría
function Fabian(edad) {
    // Aquí quiero validar primero que la edad sea un número correcto
    if (edad < 0) {
        return "Edad inválida";
    } else {
        // Ahora clasifico por rangos porque quiero evaluar diferentes etapas
        if (edad < 12) {
            return "Niño";
        } else if (edad < 18) {
            return "Adolescente";
        } else if (edad < 60) {
            return "Adulto";
        } else {
            return "Adulto mayor";
        }
    }
}

// Pruebo la función
console.log(Fabian(25));
