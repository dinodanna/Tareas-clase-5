/*
const $botonCalcular = document.querySelector("#boton-calcular")
$botonCalcular.onclick = function () {
    const horasClase1 = document.querySelector("#horas-clase-1").value
    const horasClase2 = document.querySelector("#horas-clase-2").value
    const horasClase3 = document.querySelector("#horas-clase-3").value
    const horasClase4 = document.querySelector("#horas-clase-4").value
    const horasClase5 = document.querySelector("#horas-clase-5").value
    const minutosClase1 = document.querySelector("#minutos-clase-1").value
    const minutosClase2 = document.querySelector("#minutos-clase-2").value
    const minutosClase3 = document.querySelector("#minutos-clase-3").value
    const minutosClase4 = document.querySelector("#minutos-clase-4").value
    const minutosClase5 = document.querySelector("#minutos-clase-5").value
    const segundosClase1 = document.querySelector("#segundos-clase-1").value
    const segundosClase2 = document.querySelector("#segundos-clase-2").value
    const segundosClase3 = document.querySelector("#segundos-clase-3").value
    const segundosClase4 = document.querySelector("#segundos-clase-4").value
    const segundosClase5 = document.querySelector("#segundos-clase-5").value
    
    const horasTotales = Number(horasClase1)+Number(horasClase2)+Number(horasClase3)+Number(horasClase4)+Number(horasClase5)
    const minutosTotales = Number(minutosClase1)+Number(minutosClase2)+Number(minutosClase3)+Number(minutosClase3)+Number(minutosClase4)
    const segundosTotales = Number(segundosClase1)+Number(segundosClase2)+Number(segundosClase3)+Number(segundosClase4)+Number(segundosClase5)
    
    document.querySelector("#calculo-total").value = String(horasTotales + " horas. " + minutosTotales + " minutos." + segundosTotales + " segundos.")
}


*/

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function () {
    const horasClases = document.querySelectorAll(".horas");
    const minutosClases = document.querySelectorAll(".minutos");
    const segundosClases = document.querySelectorAll(".segundos");
    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;
    for (i = 0; i < horasClases.length; i++) {
        totalHoras += Number(horasClases[i].value);
    }
    for (i = 0; i < segundosClases.length; i++) {
        totalSegundos += Number(segundosClases[i].value);
        if (totalSegundos >= 60) {
            totalMinutos++;
            totalSegundos -= 60;
        }
    }
    for (i = 0; i < minutosClases.length; i++) {
        totalMinutos += Number(minutosClases[i].value);
        if (totalMinutos >= 60) {
            totalHoras++;
            totalMinutos -= 60;
        }
    }

    document.querySelector("#calculo-total").value =
        "El tiempo total de las clases es " +
        totalHoras +
        " horas, " +
        totalMinutos +
        " minutos, " +
        totalSegundos +
        " segundos.";
};
