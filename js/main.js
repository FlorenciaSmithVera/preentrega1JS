// CALCULADORA VALOR A TRANSFERIR AUTO TOMADO (Compra de auto)

alert("Bienvenido a la calculadora de tesorería ARG")

do {
calcuTeso = prompt ("Seleccione la operación a realizar:\n\n1. TOMA 100%\n2. TOMA 80/20\n3. TRADE IN\n\nPara salir escriba CERRAR SESION").toUpperCase()
if (calcuTeso === "CERRAR SESION") {
alert ("Gracias!\nNo te olvides del asiento contable!")
}else if (calcuTeso == "1") {

} else if (calcuTeso == "2") {

}else if (calcuTeso == "3") {

} else {
    alert("Ingresá una opción valida por favor")
}


}while (calcuTeso !== "CERRAR SESION")



