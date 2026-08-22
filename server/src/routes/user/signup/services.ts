import bcrypt from "bcrypt"
import { Model } from "../models"
import { DTO, Response } from "./types"

export async function create(data: DTO): Promise<Response> {
  const { name, email, password } = data

  const exists = await Model.findOne({ email })

  if (exists) {
    return {
      data: null,
      message: {
        en: "User already registered",
        pt: "Usuário já cadastrado"
      },
      error: true,
    }
  }

  const hash = await bcrypt.hash(password, 10)

  const user = await Model.create({
    name,
    email,
    password: hash,
    role: "customer",
    language: "pt"
  })

  return {
    data: {
      id: user.uuid,
      name: user.name,
      email: user.email
    },
    message: {
      en: "User created successfully",
      pt: "Usuário criado com sucesso"
    },
    error: false,
  }
}