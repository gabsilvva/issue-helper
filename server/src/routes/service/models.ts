import mongoose, { Schema, Document } from "mongoose"
import { randomUUID } from "crypto"
import { Id, Timestamps } from "@/types/base"
import { StatusId } from "./types"

export interface Service extends Document, Timestamps {
  uuid: Id
  title: string
  price: number
  userId: Id
  status: StatusId
}

const ServiceSchema = new Schema<Service>({
  uuid: {
    type: String,
    default: randomUUID(),
    unique: true,
    index: true
  },
  title: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  userId: { type: String, ref: "User", required: true },
  status: {
    type: Number,
    enum: Object.values(StatusId).filter(v => typeof v === "number"),
    required: true,
    default: StatusId.Active
  },
}, {
  timestamps: true
})

export const Model = mongoose.model<Service>("Service", ServiceSchema)