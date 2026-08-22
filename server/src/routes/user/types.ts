import { Id } from "@/types/base";

export interface Response {
  id: Id;
  name: string
  email: string
}

export type Role = "admin" | "customer" | "technician"