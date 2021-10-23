const platos=[
    "encebollado",
    "tigrillo",
    "bolon",
    "sanduche",
    "ceviche"
]
const otrosPlatos= [
    "Arroz con pollo",
    "Tonga",
    "Guata con Lengua",
    function(){
        return 'ok';
    }
]


const unionPlatos = { ...platos, ...otrosPlatos }
console.log(unionPlatos)