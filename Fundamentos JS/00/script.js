function identificarMayorEdad()
{
console.log()
    let resultado = "";
    //Identificar si es mayor o menos de edad
    let edad = prompt("Por favor ingrese su edad: ")
    if(edad >= 18){
        resultado = `Es mayor de edad - tiene: <h2>${edad} años</h2>`
    } else{
        resultado = `Es menor de edad - tiene: <h2>${edad} años</h2>`
    }
    document.getElementById('listas').innerHTML = resultado;
}