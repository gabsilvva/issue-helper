import { Router, type Router as RouterType } from "express"
import { createController, listController } from "./controllers"

const router: RouterType = Router()

router.post("/", createController)
router.get("/", listController)
router.get("/:uuid", listController)

export default router