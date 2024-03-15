//Ejercicios creacion de variables

//Una variable global de tipo
var global = "Global";
//Variable loacl
let local = "Local";
//Variable constante
const constante = "Constante";


console.log("Variables: Global: " + global + " Local: " + local + " Constante: " + constante)

let numero = 4; // Número entero
let decimal = 3.1416; // Número decimal 
let string = "Texto"; // Cadena de texto
let boolean = true; // Booleano
let array = ["Perro", 20, "Gato", 50]; // Array
let object = {Edad: 20, Nombre: "Joshua", Telefono: 912345678, Direccion: "Felipe 7458"}; // Object
let Indefinida; // Indefinida
let nula = null; // Variable nula

function sumar(){
    return 10 + 5;     // Funcion sin parametros
};  

console.log("Variables:\nEntero: " + numero + "\nDecimal: " + decimal + "\nString: " + string + "\nBooleano: " + boolean + "\nArray: " + array + "\nObjeto: " + JSON.stringify(object) + "\nIndefinida: " + Indefinida + "\nNula: " + nula + "\nResultado de Funcion: " + sumar())
console.log(sumar)