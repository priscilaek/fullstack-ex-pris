// 1. IMPORTACIONES
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// 2. INICIALIZADORES
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// OPCIONAL (LUEGO SE INTERCAMBIARÁ POR UNA BASE DE DATOS)
let data = [
  {
    id: 1,
    nombre: "Mike",
  },
  {
    id: 2,
    nombre: "Ramiro",
  },
]

// 3. RUTAS

// PROD: https://midominio.com/
// DEV: localhost:3005/
app.get("/", (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",
    data: data,
  })
})

// 4. LEVANTAMIENTO DEL SERVIDOR
app.listen(process.env.BASE_URL_PORT, () =>
  console.log("Servidor está activo.")
)
