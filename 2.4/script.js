// Seleccionar elementos
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".nav img");

// Modificar el texto de un h3
var h3 = document.querySelector("h3");
h3.innerText = "New Title";

// Cambiar el atributo src de la imagen
var petImg = document.querySelector("#pet-img");
function switchImg() {
    petImg.src = "dog.jpg";
}

// Cambiar el estilo de un botón al hacer clic
function setActive(element) {
    if (element.classList.contains("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.add("dark-mode");
    }
}
