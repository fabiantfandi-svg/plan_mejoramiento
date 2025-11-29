// En esta función determino el nivel de riesgo según 3 factores
function Torres(temp, humedad, viento) {
    // Aquí combino varias condiciones porque quiero evaluar riesgo real
    if (temp > 30 && humedad < 30 && viento > 40) {
        return "Riesgo extremo";
    } else if ((temp > 25 && viento > 30) || humedad < 20) {
        return "Riesgo alto";
    } else if (temp > 20 || viento > 10) {
        return "Riesgo moderado";
    } else {
        return "Riesgo bajo";
    }
}

console.log(Torres(32, 25, 50));
