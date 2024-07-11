// CALCULADORA VALOR A TRANSFERIR AUTO TOMADO (Compra de auto)

alert("Bienvenido a la calculadora de tesorería ARG")

let montocompro = (a, b) => {
    let ofertainicial = parseInt(prompt("Ingresa valor oferta inicial"))
    let descuentosmecanicos = parseInt(prompt("Ingresa valor descuentos mecánicos"))
    alert("El monto comprobante es ARS " + (ofertainicial - descuentosmecanicos) + "\n\nACORDATE de ingresarlo en la prox pantalla!!")
    let montocomprob = parseInt(ofertainicial - descuentosmecanicos)
    return montocomprob
}

const valorcien = (a, b, c) => {
    let montocomprob = parseInt(prompt("Ingresa valor monto comprobante"))
    let patentes = parseInt(prompt("Ingresa valor deuda patentes"))
    let infracciones = parseInt(prompt("Ingresa valor deuda infracciones"))
    alert("El valor total del auto tomado es ARS " + (montocomprob - patentes - infracciones))
    let valorcien = (montocomprob - patentes - infracciones) 
    return valorcien
}


do {
    calcuTeso = prompt("Seleccione la operación a realizar:\n\n1. TOMA 100%\n2. TOMA 80/20\n3. TRADE IN\n\nPara salir escriba CERRAR SESION").toUpperCase()
    if (calcuTeso === "CERRAR SESION") {
        alert("Gracias!\nNo te olvides del asiento contable!")
    } else if (calcuTeso == "1") {
        montocompro()
        do {
            valorcien()
        } while (montocompro === "CERRAR SESION")
    } else if (calcuTeso == "2") {
        montocompro()
    } else if (calcuTeso == "3") {
        montocompro()
    } else {
        alert("Ingresá una opción valida por favor")
    }
} while (calcuTeso !== "CERRAR SESION")





