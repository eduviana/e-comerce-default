import Usuario from "../models/Usuario.js";

const crearUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();
        console.log(usuarioAlmacenado);
    } catch (error) {
        console.log(error);
    }
}


export {crearUsuario};