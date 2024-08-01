/*Leer los datos de una persona (nombre, apellido, edad) y mostrar a traves de una inscripcion*/
/*
let nombre = prompt("Escribe un Nombre: ");
let apellido = prompt("Escribe un apellido: ");
let edad = prompt("Escribe tu edad: ");

function mostrarDatos(nombre, apellido, edad){   
    console.log(`El nombre completo es: ${nombre} apellido ${apellido}, edad: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);
*/



// segundo ejercicio

/*
let numero = parseInt(prompt("Ingrese un valor numerico: "));
function operar(num){
    return (num / 3 + 10 ) * 2;
}
console.log(`El resultado es: ${operar(numero)}`);
*/


// tercer ejecicio
/*
let numero1 = parseInt(prompt("Ingrese un valor numerico"));
let numero2 = parseInt(prompt("Ingrese un segunco valor numerico"));

function mayorMenor(){
    if(numero1 < numero2){
        console.log(`Esta creciente`);
    }
    else if(numero1 > numero2){
        console.log(`Esta decreciente`);
    }
}
mayorMenor();
*/

// CUARTO EJERCICIO
/*
let num1 = parseFloat(prompt("Ingrese un numero: "));
let num2 = parseFloat(prompt("Ingrese un numero: "));
let num3 = parseFloat(prompt("Ingrese un numero: "));
let num4 = parseFloat(prompt("Ingrese un numero: "));
let num5 = parseFloat(prompt("Ingrese un numero: "));
let operacion = (num1 + num2 + num3 + num4 + num5) / 5;
function promedio(){
    console.log(`El promedio es: ${operacion}`);  
}
promedio();
*/

// QUINTO EJERCICIO
/*
let vueltas = parseInt(prompt("Ingrese la cantidad de números: "));
let suma = 0;

for(i = 1; i <= vueltas; i++){
    suma += i;
}

console.log(`La suma de los primeros ${vueltas} números naturales es: ${suma}`);
*/
 
//SEXTO EJECICIO
/*
let pares = 0;

for(let i = 0; i < 100; i++){
    pares += 2;
    console.log(pares)
}
*/

// SEPTIMO EJECICIO
/*
let inpares = -1;

for(let i = 0; i < 100; i++){
    inpares += 2;
    console.log(inpares)
}
*/

//OCTABO EJERCICIO
/*
let suma = 0;

for(let i = 0; i < 5; i++){
    let numero = parseInt(prompt("Ingrese los numeros"));
    suma += numero;
}
console.log(`la suma da: ${suma}`)
*/