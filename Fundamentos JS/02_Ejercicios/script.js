console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora = 2024;
    let fecha_Nac = 2006;
    let edad = ahora - fecha_Nac;
    alert(`Mi edad es: ${edad}`);
    // Tu código aquí
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    let var1 = 15;
    let var2 = var1;
    alert(`El valor de var2 es: ${var2}`);
    
    // Tu código aquí
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1', 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = 5;
    let num2 = 10;
    let num3 = 15
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;
    
    alert(`La suma es: ${suma}\nLa resta es: ${resta}\nLa multiplicacion es: ${multiplicacion}\nLa division es: ${division}`);
    
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_Casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
    function manipularCadenas() {
    let direccion = "San José";
    let n_Casa = "5687";
    let mensaje = "La dirección es: " + direccion + " " + n_Casa;
    let longitud = mensaje.length;
    alert(`${mensaje}\nLongitud: ${longitud}\nAntepenultimo Caracter: ${mensaje[27]}`);
    // Tu código aquí
    }