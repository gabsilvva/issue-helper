import { Response } from "express"
import { ResponseBase } from "@/types/base"

export function respond<T>(
  data: T,
  message: { en: string; pt: string },
  error = false
): ResponseBase<T> {
  return { data, message, error }
}

export function badRequest(res: Response, message: { en: string; pt: string }): void {
  res.status(400).json({ data: null, message, error: true } as ResponseBase)
}