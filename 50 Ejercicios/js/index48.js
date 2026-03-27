// 48. Saludo por género y edad
genero = prompt("Ingrese su género (M/F):")
edad = parseInt(prompt("Ingrese su edad:"))

if (genero === "M" && edad < 18) {
    alert("Bienvenido joven")
} else if (genero === "M") {
    alert("Bienvenido señor")
} else if (genero === "F" && edad < 18) {
    alert("Bienvenida joven")
} else if (genero === "F") {
    alert("Bienvenida señora")
} else {
    alert("Dato inválido")
}