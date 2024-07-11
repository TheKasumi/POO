const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaNombres = document.getElementById('listaNombres');


agregarBtn.addEventListener('click', function() {

    const nombre = nombreInput.value.trim();

    if (nombre !== '') {

    const nuevoNombre = document.createElement('li');
    nuevoNombre.textContent = nombre;

    listaNombres.appendChild(nuevoNombre);

    nombreInput.value = '';

    agregarBtn.disabled = true;
}
});