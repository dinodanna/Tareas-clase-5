//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaDeNumeros = document.querySelectorAll("li");
let arrayDeNumeros = [];

for (i = 0; i < listaDeNumeros.length; i++) {
    arrayDeNumeros.push(listaDeNumeros[i].innerText);
}

// 1

document.querySelector("#promedio").innerText =
    "El promedio es: " + calcularPromedio(arrayDeNumeros);

function calcularPromedio(array) {
    sumaDeNumeros = 0;
    for (i = 0; i < arrayDeNumeros.length; i++) {
        sumaDeNumeros += Number(arrayDeNumeros[i]);
    }
    promedioDeNumeros = sumaDeNumeros / arrayDeNumeros.length;
    return promedioDeNumeros;
}

// 2.

numeroMayor = Number(arrayDeNumeros[0]);
for (i = 0; i < arrayDeNumeros.length; i++) {
    if (numeroMayor < Number(arrayDeNumeros[i])) {
        numeroMayor = Number(arrayDeNumeros[i]);
    }
}

document.querySelector("#numero-mayor").innerText =
    "El mayor número es: " + numeroMayor;

//3

numeroMenor = Number(arrayDeNumeros[0]);
for (i = 0; i < arrayDeNumeros.length; i++) {
    if (numeroMenor > Number(arrayDeNumeros[i])) {
        numeroMenor = Number(arrayDeNumeros[i]);
    }
}

document.querySelector("#numero-menor").innerText =
    "El menor número es: " + numeroMenor;

// 4
let numeroMasRepetido;
let contador = 0;
let contadorMaximo = 0;

for (i = 0; i < arrayDeNumeros.length; i++) {
    for (j = 0; j < arrayDeNumeros.length; j++) {
        if (arrayDeNumeros[i] === arrayDeNumeros[j]) {
            contador++;
        }
        if (contador > contadorMaximo) {
            contadorMaximo = contador;
            numeroMasRepetido = Number(arrayDeNumeros[i]);
        }
    }
    contador = 0;
}

document.querySelector("#numero-mas-repetido").innerText =
    "El número mas repetido es " + numeroMasRepetido;
