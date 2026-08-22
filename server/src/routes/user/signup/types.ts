import { Response as User } from "../types"
import { ResponseBase } from "@/types/base"

export interface DTO extends Pick<User, "name" | "email"> {
  password: string
}

export type Response = ResponseBase<Pick<User, "name" | "email" | "id">>