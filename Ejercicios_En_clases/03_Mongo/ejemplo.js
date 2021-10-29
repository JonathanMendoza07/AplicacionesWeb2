const mongoose = require("mongoose");
const conexion = `mongodb+srv://dbMendoza:mendoza21@cluster0.lz4oj.mongodb.net/dbPrueba?retryWrites=true&w=majority`;

(async () => {
    await mongoose.connect(conexion, { useNewUrlParser: true, useUnifiedTopology: true });
    const Usuario = mongoose.model("Usuario", { nombre: String });
    const Usuario1 = new Usuario({ nombre: "Juan Anangono" });

    const guardado = await Usuario1.save();
    const respuesta = await Usuario.find();
    console.log(respuesta);
})();