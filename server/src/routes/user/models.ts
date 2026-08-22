import mongoose, { Schema, Document } from "mongoose"
import { randomUUID } from "crypto"
import { Id, Timestamps } from "@/types/base"
import { Role } from "./types"
import { Language } from "@/types/messages"

export interface User extends Document, Timestamps {
  uuid: Id
  avatar?: string
  name: string
  email: string
  password: string
  language: Language
  role: Role
  availability?: {
    morning: string[]
    afternoon: string[]
    night: string[]
  }
  lastLoginAt: Date
}

const AvailabilitySchema = new Schema({
  morning: { type: [String], default: [] },
  afternoon: { type: [String], default: [] },
  night: { type: [String], default: [] }
}, { _id: false })

const UserSchema = new Schema<User>({
  uuid: {
    type: String,
    default: randomUUID(),
    unique: true,
    index: true
  },
  avatar: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  language: { type: String, required: true },
  role: { type: String, required: true },
  availability: { type: AvailabilitySchema, required: false },
  lastLoginAt: { type: Date, default: Date.now }
}, {
  timestamps: true
})

export const Model = mongoose.model<User>("User", UserSchema)