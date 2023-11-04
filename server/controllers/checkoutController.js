// import Cart from "../models/Cart"

// IMPORTAR STRIPE Y CONFIGURAR CLAVE DE STRIPE
import stripe from "stripe"
import dotenv from "dotenv"
dotenv.config()

const stripeKey = stripe(process.env.STRIPE_SECRET_KEY)

const createCheckoutSession = async (req, res) => {
  console.log("accediste...")

  // 1. OBTENER EL USUARIO Y SU ID CON CORREO

  const user = {
    id: "123",
    email: "m@mikenieva.com",
  }

  // 2. CREACIÓN DEL CARRITO DE COMPRAS O OBTENCIÓN DEL USUARIO

  // 3. CREACIÓN DE CHECKOUT EN STRIPE

  const line_items = [
    {
      price: "price_1O8pBDCl7xMuNYvuspXlFIcZ",
      quantity: 1,
    },
  ]

  console.log(stripeKey)

  try {
    const session = await stripeKey.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: "https://google.com",
      cancel_url: "https://yahoo.com",
      customer_email: user.email,
    })
    console.log("session", session)

    res.status(200).json({
      msg: "Accede a este link para la sesión de pago",
      session_url: session.url,
      session,
    })
  } catch (error) {
    console.log("error", error)
    res.status(400).json({
      msg: "Hubo un problema",
      error,
    })
  }
}

export default {
  createCheckoutSession,
}
