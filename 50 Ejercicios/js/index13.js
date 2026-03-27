// 13. Hora AM o PM
hora = parseInt(prompt("Ingrese la hora (0-23):"))

if (hora >= 0 && hora < 12) {
    alert("AM")
} else if (hora >= 12 && hora <= 23) {
    alert("PM")
} else {
    alert("Hora inválida")
}
