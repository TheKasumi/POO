const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaNombres = document.getElementById('listaNombres');
let nombreCount = 0;

agregarBtn.addEventListener('click', function() {
    const nombre = nombreInput.value.trim();

    if (nombre !== '' && nombreCount < 100) {
        const nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = nombre;
        listaNombres.appendChild(nuevoNombre);
        nombreInput.value = '';
        nombreCount++;

        if (nombreCount === 100) {
            agregarBtn.disabled = true;
        }
    }
});