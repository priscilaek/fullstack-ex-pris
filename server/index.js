// 1. IMPORTACIONES
// A. LIBRERÍAS
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// B. ARCHIVOS
import userRoute from "./routes/users.js"
import carRoute from "./routes/cars.js"

// 2. INICIALIZADORES
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.BASE_URL_PORT || 3005

// 3. RUTAS

// PROD: https://midominio.com/
// DEV: localhost:3005/
app.use("/api/v1/users", userRoute)
app.use("/api/v1/cars", carRoute)

// 4. LEVANTAMIENTO DEL SERVIDOR
app.listen(port, () => console.log("Servidor está activo."))
