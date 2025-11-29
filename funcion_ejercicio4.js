// Esta función valida un usuario según reglas de contraseña
function Fandiño(usuario, contraseña) {
    // Primero valido que los dos campos existan
    if (!usuario || !contraseña) {
        return "Campos incompletos";
    }

    // Luego aplico varias reglas específicas
    if (contraseña.length < 8) {
        return "Contraseña muy corta";
    }

    if (!contraseña.includes("#") && !contraseña.includes("!")) {
        return "Debe incluir un caracter especial (# o !)";
    }

    if (usuario.length < 4 && contraseña.length > 12) {
        return "Combinación sospechosa";
    }

    return "Usuario válido";
}

console.log(Fandiño("Fabian", "claveSegura!"));
