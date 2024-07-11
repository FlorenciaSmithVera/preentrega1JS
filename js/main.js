// CALCULADORA COMPRAVENTA DE AUTOS

alert("Bienvenido a la calculadora de tesorería ARG")

let montocompro = (a, b) => {
    let ofertainicial = parseInt(prompt("Ingresa valor oferta inicial"))
    let descuentosmecanicos = parseInt(prompt("Ingresa valor descuentos mecánicos"))
    alert("El monto comprobante es ARS " + parseInt((ofertainicial - descuentosmecanicos)) + "\n\nACORDATE de ingresarlo en la prox pantalla!!")
    let montocomprob = parseInt(ofertainicial - descuentosmecanicos)
    return montocomprob
}

const valorcien = (a, b, c) => {
    let montocomprob = parseInt(prompt("Ingresa valor monto comprobante"))
    let patentes = parseInt(prompt("Ingresa valor deuda patentes"))
    let infracciones = parseInt(prompt("Ingresa valor deuda infracciones"))
    alert("El valor total del auto tomado es ARS " + (montocomprob - patentes - infracciones))
    let valorcien = parseInt((montocomprob - patentes - infracciones))
    return valorcien
}

function tradein() {
    let montocomprob = parseInt(prompt("Ingresa valor monto comprobante"))
    let patentes = parseInt(prompt("Ingresa valor deuda patentes"))
    let infracciones = parseInt(prompt("Ingresa valor deuda infracciones"))
    alert("El valor total del auto tomado es ARS " + (montocomprob - patentes - infracciones) + "\n\nACORDATE de ingresarlo en la prox pantalla!!")
    let valorcien = parseInt(prompt("Ingresa el valor total del auto tomado"))
    let valorventa = parseInt(prompt("Ingresa el valor del auto que lleva"))
    let saldoafavor = parseInt((valorventa - valorcien))
    if (saldoafavor > 0) {
        alert("El cliente aún debe ARS " + (valorventa - valorcien))
    } else if (saldoafavor < 1) {
        alert("Transferir al cliente ARS " + (-(valorventa - valorcien)))
    }
    else {
        alert("Ingresá una opción valida por favor")
    }
}

do {
    calcuTeso = prompt("Seleccione la operación a realizar:\n\n1. TOMA 100%\n2. TRADE IN\n\nPara salir escriba CERRAR SESION").toUpperCase()
    if (calcuTeso === "CERRAR SESION") {
        alert("Gracias!\nNo te olvides del asiento contable!")
    } else if (calcuTeso == "1") {
        montocompro()
        do {
            valorcien()
        } while (montocompro === "CERRAR SESION")
    } else if (calcuTeso == "2") {
        montocompro()
        do {
            tradein()
        } while (montocompro === "CERRAR SESION")
    } else {
        alert("Ingresá una opción valida por favor")
    }
} while (calcuTeso !== "CERRAR SESION")    