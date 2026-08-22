import { UUID } from "crypto"
import { Message } from "./messages"

export interface ResponseBase<T = any> {
  data: T | null
  message: Message
  error: boolean
}

export interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export type Id = UUID