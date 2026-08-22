import { Request, Response } from "express"
import { authenticate } from "./services"
import { ResponseBase } from "@/types/base"

export async function controller(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({
        data: null,
        message: {
          en: "All fields are required",
          pt: "Todos os campos são obrigatórios"
        },
        error: true
      } as ResponseBase)
      return
    }

    const result = await authenticate({ email, password })

    if (result.error) {
      res.status(401).json(result)
      return
    }

    res.status(200).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error logging in"
    res.status(400).json({
        data: null,
        message: {
          en: message,
          pt: "Erro ao fazer login"
        },
        error: true
      } as ResponseBase)
  }
}