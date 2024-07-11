var button = document.getElementById("clickButton");
var countElement = document.getElementById("clickCount");
var count = 0; 

function resetCounter(){
    count = 0;
    countElement.textContent = count;
    button.style.backgroundColor = "Initial";
}

button.onclick = function() {
    count++;
    countElement.textContent = count;
    this.style.backgroundColor = "lightgreen";
    setTimeout(resetCounter, 10000);
}
