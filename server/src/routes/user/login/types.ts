import { Response as User } from "../types"
import { ResponseBase } from "@/types/base"

export interface DTO {
  email: string
  password: string
}

export type Response = ResponseBase<Pick<User, "name" | "email" | "id">>