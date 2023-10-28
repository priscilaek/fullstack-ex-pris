import User from "./../models/User.js"

const readAll = (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",
    data: data,
  })
}

const create = async (req, res) => {
  const { name } = req.body

  const newUser = await User.create({
    name,
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
