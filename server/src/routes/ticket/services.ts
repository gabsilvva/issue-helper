import { ResponseBase } from "@/types/base"
import { Model } from "./models"
import { CATEGORIES, CategoriesId, Create, DEFAULT_TECHNICIAN, GroupedByStatus, STATUSES, StatusId, Ticket } from "./types"
import { Model as UserModel } from "../user/models";
import { Role } from "../user/types";
import { respond } from "@/utils/response";

function serialize(doc: any): Ticket {
  return {
    uuid: doc.uuid,
    title: doc.title,
    description: doc.description,
    service: doc.service,
    price: String(doc.price),
    status: STATUSES[doc.status as StatusId],
    category: CATEGORIES[doc.category as CategoriesId],
    user: {
      uuid: doc.userId.uuid,
      name: doc.userId.name
    },
    technician: doc.technicianId ? {
      uuid: doc.technicianId.uuid,
      name: doc.technicianId.name
    } : DEFAULT_TECHNICIAN,
    additionalServices: doc.additionalServices,
    additionalValue: String(doc.additionalValue),
    executedAt: doc.executedAt,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt
  }
}

async function assignTechnician(): Promise<string | undefined> {
  const role: Role = "technician"
  const technicians = await UserModel.find({ role })

  const random = technicians[Math.floor(Math.random() * technicians.length)]

  if (!random) return undefined

  return random._id.toString()
}

export async function create(data: Create): Promise<ResponseBase<Ticket | null>> {
  const user = await UserModel.findOne({ uuid: data.userId })

  if (!user) {
    return respond(null, {
      en: "User not found",
      pt: "Usuário não encontrado"
    }, true)
  }

  const technicianId = await assignTechnician()

  const price = CATEGORIES[data.category].basePrice
  const additionalValue = (data.additionalServices ?? []).reduce(
    (sum, item) => sum + Number(item.price),
    0
  )

  const ticket = await Model.create({
    ...data,
    userId: user._id,
    technicianId,
    status: StatusId.Open,
    price,
    additionalValue
  })

  const populated = await ticket.populate(["userId", "technicianId"])

  return respond(serialize(populated), {
    en: "Ticket created successfully",
    pt: "Chamado criado com sucesso"
  })
}

export async function list(uuid?: string): Promise<ResponseBase<Ticket | GroupedByStatus | null>> {
  if (uuid) {
    const ticket = await Model.findOne({ uuid }).populate(["userId", "technicianId"])

    if (!ticket) {
      return respond(null, {
        en: "Ticket not found",
        pt: "Chamado não encontrado"
      }, true)
    }

    return respond(serialize(ticket), {
      en: "Ticket found successfully",
      pt: "Chamado encontrado com sucesso"
    })
  }

  const tickets = await Model.find().populate(["userId", "technicianId"])

  const grouped: GroupedByStatus = Object.values(StatusId)
    .filter((id): id is StatusId => typeof id === "number")
    .map((id) => ({
      status: STATUSES[id],
      list: tickets.filter((t) => t.status === id).map(serialize)
    }))

  return respond(grouped, {
    en: "Tickets found successfully",
    pt: "Chamados encontrados com sucesso"
  })
}