function addUsuario(){
    var nameInput = document.getElementById("name")
    var nameList = document.getElementById("nameList")

    if(name.Input.value.trim() !==""){
        var newName = document.getElementById("Li")
        newName.textContent = nameInput.value;
        nameList.appendChild(newName);

        
    }
}