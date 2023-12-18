import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

const Usuario = mongoose.model("Usuario", usuarioSchema );
export default Usuario;