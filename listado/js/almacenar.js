// funcion guardar//
function guardar() {
    localStorage.setItem('contenido', JSON.stringify(archivo))
}
// funcion mostrar//
function mostrar() {
    let archivo2 = localStorage.getItem('contenido')
    console.log(archivo2)
    archivo = JSON.parse(archivo2)
}

// funcion para agregar datos//
let archivo = []

function agregar() {
    let item = document.getElementById("item").value
    if (item !== "") {
        archivo.push(item)
        guardar(archivo);
        document.getElementById("item").value = "";
    }
    añadir();
}
// funcion añadir//
function añadir() {
    let filas = ""

    for (let item of archivo) {
        filas += `<li class="list-group-item"> ${item} </li>`
    }
    document.getElementById("contenedor").innerHTML = filas
}

// funcion que limpia los datos de contenedor//
function limpia() {
    archivo = []
    guardar();
    añadir();
}
    document.addEventListener("DOMContentLoaded", () => {
    mostrar();
    añadir();
    document.getElementById("agregar").addEventListener("click", () => {
        agregar();
        console.log(archivo)
    })

    document.getElementById("limpiar").addEventListener("click", () => {
        limpia();
    })
})