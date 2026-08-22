import dotenv from "dotenv"
import express, { Application } from "express"
import cors from "cors"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import connection from "@config/database"
import routes from "@routes/index"

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 7777

connection()

app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_URL || `http://localhost:${PORT}`,
  credentials: true
}))

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

app.use("/api", limiter, routes)

app.listen(PORT, () => console.log(`Running on: http://localhost:${PORT}`))