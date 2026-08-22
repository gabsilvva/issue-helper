import { Request, Response } from "express"
import { create } from "./services"
import { ResponseBase } from "@/types/base"

export async function controller(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
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

    const result = await create({ name, email, password })
    res.status(201).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error creating user"
    res.status(400).json({
        data: null,
        message: {
          en: message,
          pt: "Erro ao criar usuário"
        },
        error: true
      } as ResponseBase)
  }
}