// console.log(saludar3("Jonathan"));

function saludar(nombre) {
    return `Hola buenas ${nombre}`;
}

const saludar2 =function(nombre)
{
    return `Hola que tal ${nombre}`;
}

const saludar3 =(nombre)=>{
    return `Hola que tal ${nombre}`
}


function mostrarFuncionSaludar(fn,parametro)
{
    console.log(fn(parametro));
}
mostrarFuncionSaludar(saludar3,"Jonathan");