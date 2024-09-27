console.log("page loaded...");

function playVideo(secondaryVideo, textoId) {
    var mainVideo = document.getElementById("mainVideo");
    var temp = mainVideo.src;
    var textoSecundario = document.getElementById(textoId);
    var textoPrincipal = document.getElementById("texto");

    var tempTexto = textoSecundario.innerText;
    textoSecundario.innerText = textoPrincipal.innerText;
    textoPrincipal.innerText = tempTexto;
    
    mainVideo.src = secondaryVideo.src;
    mainVideo.play(); 
    
    secondaryVideo.src = temp;
}
function pauseVideo() {
    mainVideo.pause(); 
}





