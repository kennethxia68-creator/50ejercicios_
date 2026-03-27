// 22. Puede conducir
edad = parseInt(prompt("Ingrese su edad:"))
licencia = prompt("¿Tiene licencia? (si/no)")

if (edad > 18 && licencia === "si") {
    alert("Puede conducir")
} else {
    alert("No puede conducir")
}
