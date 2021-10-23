//Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

let multiplicacion = (numero, iteraciones = 1) => {
    if (iteraciones > 12) {
        return;
    }
    console.log(`${numero} * ${iteraciones} = ${numero * iteraciones}`);
    return multiplicacion(numero, iteraciones + 1);
}
console.log("ejercicio 1:");
multiplicacion(3);
