// Esta función evalúa si alguien puede entrar a un evento especial
function David(edad, invitado) {
    // Primero determino si cumple edad o si lo invitaron
    if (edad >= 18 && invitado === true) {
        return "Puede entrar con pase VIP";
    } else if (edad >= 18 || invitado === true) {
        return "Puede entrar";
    } else {
        return "No puede entrar";
    }
}

console.log(David(16, true));
