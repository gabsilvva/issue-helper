import { Request, Response } from "express"
import { create, list } from "./services"
import { ResponseBase } from "@/types/base"
import { badRequest } from "@/utils/response"

export async function createController(req: Request, res: Response): Promise<void> {
  try {
    const { title, description, category, service, userId, additionalServices } = req.body

    if (!title || !description || !category || !service || !userId) {
      badRequest(res, {
        en: "All fields are required",
        pt: "Todos os campos são obrigatórios"
      })
      return
    }

    const result = await create({ title, description, category, service, userId, additionalServices })
    res.status(201).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error creating ticket"
    res.status(400).json({
      data: null,
      message: { en: message, pt: "Erro ao criar chamado" },
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
    const message = error instanceof Error ? error.message : "Error listing tickets"
    res.status(400).json({
      data: null,
      message: { en: message, pt: "Erro ao buscar chamados" },
      error: true
    } as ResponseBase)
  }
}