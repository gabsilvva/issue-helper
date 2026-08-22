import mongoose, { Schema, Document } from "mongoose"
import { randomUUID } from "crypto"
import { Id, Timestamps } from "@/types/base"
import { CategoriesId, StatusId } from "./types"

export interface Ticket extends Document, Timestamps {
  uuid: Id
  title: string
  description: string
  service: string
  price: number
  userId: Id
  technicianId: Id
  additionalServices: { name: string, price: string }[]
  additionalValue: number
  status: StatusId
  category: CategoriesId
  executedAt?: Date
}

const AdditionalServiceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }
}, { _id: false })

const TicketSchema = new Schema<Ticket>({
  uuid: {
    type: String,
    default: randomUUID(),
    unique: true,
    index: true
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  service: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  userId: { type: String, ref: "User", required: true },
  technicianId: { type: String, ref: "User", required: false },
  additionalServices: { type: [AdditionalServiceSchema], default: [] },
  additionalValue: { type: Number, required: true, default: 0 },
  status: {
    type: Number,
    enum: Object.values(StatusId).filter(v => typeof v === "number"),
    required: true,
    default: StatusId.Open
  },
  category: {
    type: Number,
    enum: Object.values(CategoriesId).filter(v => typeof v === "number"),
    required: true
  },
  executedAt: { type: Date, required: false }
}, {
  timestamps: true
})

export const Model = mongoose.model<Ticket>("Ticket", TicketSchema)