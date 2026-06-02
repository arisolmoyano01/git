function validarDatos() {
    let nombre = "Galletitas";

    if (nombre !== "") {
        console.log("Datos válidos");
    } else {
        console.log("Datos inválidos");
    }
}

module.exports = {
    validarDatos
};