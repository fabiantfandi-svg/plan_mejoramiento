import { Fabian } from "./database.js";

export function Torres(id) {
    return Fabian.find(usuario => usuario.id === id);
}

export function Fandiño(nombre) {
    return Fabian.find(usuario => usuario.nombre === nombre);
}
