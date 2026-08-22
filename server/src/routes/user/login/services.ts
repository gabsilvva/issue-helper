import bcrypt from "bcrypt"
import { Model } from "../models"
import { DTO, Response } from "./types"

export async function authenticate(data: DTO): Promise<Response> {
  const { email, password } = data

  const user = await Model.findOne({ email })

  const valid = user && await bcrypt.compare(password, user.password)

  if (!valid) {
    return {
      data: null,
      message: {
        en: "Invalid email or password",
        pt: "E-mail ou senha inválidos"
      },
      error: true,
    }
  }

  user.lastLoginAt = new Date()
  await user.save()

  return {
    data: {
      id: user.uuid,
      name: user.name,
      email: user.email
    },
    message: {
      en: "Login successful",
      pt: "Login realizado com sucesso"
    },
    error: false,
  }
}