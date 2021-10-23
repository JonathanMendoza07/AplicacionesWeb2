//Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

let multiplicacion = (numero, iteraciones = 1) => {
    if (iteraciones > 12) {
        return;
    }
    console.log(`${numero} * ${iteraciones} = ${numero * iteraciones}`);
    return multiplicacion(numero, iteraciones + 1);
};
console.log("ejercicio 1:");
multiplicacion(3);



//Ejercicio 2
//Crear un objeto mascota que tenga como parámetros nombre, edad y color.
const mascota ={
    nombre :"Firulays",
    edad : "2 año",
    color : "Negro"
};



//Ejercicio 3
//Definir un arreglo con las comidas favoritas
const comidasFav =[
    "pollo al jugo",
    "ceviche",
    "encebollado",
    "cazuela",
    "pescado apanado"
];



//Ejercicio 4
//Recorrer el array definido en la opción anterior y mostrarlo aplicando  do-while 
let recorridoArray =(Array) =>{
    let vari =0;
    do {
        console.log(Array[vari])
        vari++;
    } while (vari <comidasFav.length);
}
console.log("\nEjercicio 4");
recorridoArray(comidasFav);



//Ejercicio 5
// Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúsculas
let converMayus =   (comidas) =>{
    console.log(comidas.toUpperCase());
}
console.log("\nEjercicio 5");
converMayus(comidasFav[2])