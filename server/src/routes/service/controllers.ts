import { Request, Response } from "express"
import { create, list } from "./services"
import { ResponseBase } from "@/types/base"
import { badRequest } from "@/utils/response"

export async function createController(req: Request, res: Response): Promise<void> {
  try {
    const { title, price, userId } = req.body

    if (!title || !price || !userId) {
      badRequest(res, {
        en: "All fields are required",
        pt: "Todos os campos são obrigatórios"
      })
      return
    }

    const result = await create({ title, price, userId })
    res.status(201).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error creating service"
    res.status(400).json({
      data: null,
      message: { en: message, pt: "Erro ao criar serviço" },
      error: true
    } as ResponseBase)
  }
}

export async function listController(req: Request, res: Response): Promise<void> {
  try {
    const { uuid } = req.params
    const result = await list(uuid)

    if (result.error) {
      res.status(404).json(result)
      return
    }

    res.status(200).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error listing services"
    res.status(400).json({
      data: null,
      message: { en: message, pt: "Erro ao buscar serviços" },
      error: true
    } as ResponseBase)
  }
}