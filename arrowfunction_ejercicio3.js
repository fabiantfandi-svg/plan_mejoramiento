// Aquí quiero recorrer un array dentro de una arrow function
const Torres = (lista) => {
    let Torres1 = 0; // variable permitida
    for (let Fabian2 of lista) {
        // sumo solo los pares porque así quiero filtrarlos
        if (Fabian2 % 2 === 0) {
            Torres1 += Fabian2;
        }
    }
    return Torres1;
};

console.log(Torres([2, 5, 8, 11, 14]));
