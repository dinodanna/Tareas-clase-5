const $botonIngresar = document.querySelector("#boton-ingresar")

$botonIngresar.onclick = function() {
    const nombreDeUsuario = document.querySelector("#nombre-usuario").value
    const apellidoDeUsuario = document.querySelector("#apellido-usuario").value
    const edadDeUsuario = document.querySelector("#edad-usuario").value
    document.querySelector("#datos").value = 'Nombre: ' + nombreDeUsuario + ' Apellido: '+ apellidoDeUsuario + ' Edad: '+edadDeUsuario
    document.querySelector("h1").innerText = "Bienvenido, " + nombreDeUsuario + "!"
}
