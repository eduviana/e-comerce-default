import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
const app = express();
app.use(express.json());

dotenv.config();
connectDB();

//Routing
app.use("/api/usuario", usuarioRoutes)


app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
})

