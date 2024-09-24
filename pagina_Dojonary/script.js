function increaseLikes(likeCountId) {
    const likeCountElement = document.getElementById(likeCountId);
    let currentLikes = parseInt(likeCountElement.innerText);
    likeCountElement.innerText = currentLikes + 1;
}

function addDefinition() {
    const newDefinition = prompt("Enter your definition:");
    if (newDefinition) {
        const resultsDiv = document.getElementById("ResultadosBusqueda");
        const newDefinitionElement = document.createElement("p");
        newDefinitionElement.innerText = newDefinition;
        resultsDiv.appendChild(newDefinitionElement);
    }
}