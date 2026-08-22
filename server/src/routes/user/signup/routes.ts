import { Router, type Router as RouterType } from "express"
import { controller } from "./controllers"

const router: RouterType = Router()

router.post("/", controller)

export default router