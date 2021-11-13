const Observacion = [
    {
        id: 1,
        observacion: "La mayoria de estudiantes no entran a clases",
        idDocente: 3
    },
    {
        id: 2,
        observacion: "Los estudiantes no prestan atención a clases",
        idDocente: 1
    },
    {
        id: 3,
        observacion: "el 50% de estudiantes salieron mal en las lecciones",
        idDocente: 2
    }
]
const Curso = [
    {
        id: 1,
        niveles: "Cuarto A"
    },
    {
        id: 2,
        niveles: "Septimo B"
    },
    {
        id: 3,
        niveles: "Segundo A"
    }
]
const DoncenteNombre = [
    {
        id: 1,
        nombre: "Leonel"
    },
    {
        id: 2,
        nombre: "Andrés"
    },
    {
        id: 3,
        nombre: "Josué"
    }
]


//Promises

function buscarObservacionPorId(id) {
    return new Promise((resolve, reject) => {
        const observacion = Observacion.find((observacion) => observacion.id === id);
        if (!observacion) {
            const error = new Error();
            error.message = "Observación no encontrada verifique el ID insertado";
            reject(error);
        }
        resolve(observacion);
    })
};

function BuscarDocenteDeObservacion(observacion) {
    return new Promise((resolve, reject) => {
        const docente = DoncenteNombre.find((docente) => {
            return docente.id === observacion.idDocente;
        })
        if (!docente) {
            const error = new Error();
            error.message = "Docente no encontrado";
            reject(error);
        }
        observacion.docente = docente;
        resolve(observacion);
    })
};

buscarObservacionPorId(3).then((observacion) => {
    return BuscarDocenteDeObservacion(observacion);
}).then((observacion) => {
    console.log(observacion);
}).catch((error) => {
    console.log(error.message)
});


//Async Await

async function buscarObservacion(id) {
    const observacion = Observacion.find((observacion) => observacion.id === id);
    if (!observacion) {
        const error = new Error();
        error.message = "ID de observación no encontrada";
        throw error;
    }
    return observacion;
}
Observacion.forEach(async (observacion) => {
    const Obs = await buscarObservacion(observacion.id);
    console.log(Obs);
})