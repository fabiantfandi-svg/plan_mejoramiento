// Quiero probar una arrow function usando switch
const David = (dia) => {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        default:
            return "Fin de semana";
    }
};

console.log(David(4));
