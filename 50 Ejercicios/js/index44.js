// 44. Sueldo con bono
sueldo = parseFloat(prompt("Ingrese su sueldo:"))

if (sueldo < 500) {
    alert("Nuevo sueldo: " + (sueldo + 50))
} else {
    alert("No aplica bono")
}