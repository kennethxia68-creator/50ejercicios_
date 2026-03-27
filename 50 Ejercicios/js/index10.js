// 10. Divisible entre otro número
n1 = parseFloat(prompt("Ingrese el primer número:"))
n2 = parseFloat(prompt("Ingrese el segundo número:"))

if (n2 === 0) {
    alert("No se puede dividir entre cero")
} else if (n1 % n2 === 0) {
    alert("El primero es divisible por el segundo")
} else {
    alert("No es divisible")
}