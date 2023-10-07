// 1. IMPORTACIONES
import express from "express"
import cors from "cors"


// 2. INICIALIZADORES
const app = express()
app.use(cors())
app.use(express.json())



// OPCIONAL (LUEGO SE INTERCAMBIARÁ POR UNA BASE DE DATOS)
let data = [
    {
        id: 1,
        nombre: "Mike"
    },
    { 
        id: 2,
        nombre: "Ramiro"
    }
]


// 3. RUTAS

// PROD: https://midominio.com/
// DEV: localhost:3005/
app.get("/", () => {
    res.json({
        message: "Datos obtenidos con éxito.",
        data: data

    })

})



// 4. LEVANTAMIENTO DEL SERVIDOR
app.listen("3005", () => console.log("Servidor está activo."))
