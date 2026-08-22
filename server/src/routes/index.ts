import { Router, type Router as RouterType } from "express"
import user from "./user"
import ticket from "./ticket/routes"
import service from "./service/routes"

const router: RouterType = Router()

router.use("/user", user)
router.use("/ticket", ticket)
router.use("/service", service)

export default router