import User from "./../models/User.js"
import bcryptjs from "bcryptjs"

const readAll = (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",
    data: data,
  })
}

const create = async (req, res) => {
  const { name, email, password } = req.body

  // ESTABLECER EL NIVEL DE DIFICULTAD DE ENCRIPTAMIENTO DEL PASSWORD
  const salt = await bcryptjs.genSalt(10)

  // ENCRIPTAR EL PASSWORD
  const hashedPassword = await bcryptjs.hash(password, salt)

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  res.json({
    msg: "Usuario creado con éxito",
    data: newUser,
  })
}

export default {
  readAll,
  create,
}
