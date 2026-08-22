import { Router, type Router as RouterType } from "express"
import login from "./login/routes"
import signup from "./signup/routes"

const router: RouterType = Router()

router.use("/signup", signup)
router.use("/login", login)

export default router