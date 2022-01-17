//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaDeNumeros = document.querySelectorAll("li");

// 1.

document.querySelector("#promedio").innerText =
    "El promedio es: " + calcularPromedio(listaDeNumeros);

function calcularPromedio(array) {
    sumaDeNumeros = 0;
    for (i = 0; i < listaDeNumeros.length; i++) {
        sumaDeNumeros += Number(listaDeNumeros[i].innerText);
    }
    promedioDeNumeros = sumaDeNumeros / listaDeNumeros.length;
    return promedioDeNumeros;
}

// 2.

numeroMayor = Number(listaDeNumeros[0].innerText);
for (i = 0; i < listaDeNumeros.length; i++) {
    if (numeroMayor < Number(listaDeNumeros[i].innerText)) {
        numeroMayor = Number(listaDeNumeros[i].innerText);
    }
}

document.querySelector("#numero-mayor").innerText =
    "El mayor número es: " + numeroMayor;

//3

numeroMenor = Number(listaDeNumeros[0].innerText);
for (i = 0; i < listaDeNumeros.length; i++) {
    if (numeroMenor > Number(listaDeNumeros[i].innerText)) {
        numeroMenor = Number(listaDeNumeros[i].innerText);
    }
}

document.querySelector("#numero-menor").innerText =
    "El menor número es: " + numeroMenor;

// 4
let numeroMasRepetido;
let contador = 0;
let contadorMaximo = 0;

for (i = 0; i < listaDeNumeros.length; i++) {
    for (j = 0; j < listaDeNumeros.length; j++) {
        if (listaDeNumeros[i].innerText === listaDeNumeros[j].innerText) {
            contador++;
        }
        if (contador > contadorMaximo) {
            contadorMaximo = contador;
            numeroMasRepetido = Number(listaDeNumeros[i].innerText);
        }
    }
    contador = 0;
}

document.querySelector("#numero-mas-repetido").innerText =
    "El número mas repetido es " + numeroMasRepetido;
