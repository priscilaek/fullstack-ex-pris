const readAll = (req, res) => {
  return res.json({
    msg: "Pizzas leídas con éxito",
    data: "",
  })
}

export default {
  readAll,
}
