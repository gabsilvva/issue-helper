import { ResponseBase } from "@/types/base"
import { Model } from "./models"
import { Create, STATUSES, StatusId, Service, GroupedByStatus } from "./types"
import { Model as UserModel } from "../user/models"
import { respond } from "@/utils/response";

function serialize(doc: any): Service {
  return {
    uuid: doc.uuid,
    title: doc.title,
    price: String(doc.price),
    status: STATUSES[doc.status as StatusId],
    user: {
      uuid: doc.userId.uuid,
      name: doc.userId.name
    },
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt
  }
}

export async function create(data: Create): Promise<ResponseBase<Service | null>> {
  const user = await UserModel.findOne({ uuid: data.userId })

  if (!user) {
    return respond(null, {
      en: "User not found",
      pt: "Usuário não encontrado"
    }, true)
  }

  const service = await Model.create({
    ...data,
    userId: user._id,
    status: StatusId.Active
  })

  const populated = await service.populate(["userId"])

  return respond(serialize(populated), {
    en: "Service created successfully",
    pt: "Serviço criado com sucesso"
  })
}

export async function list(uuid?: string): Promise<ResponseBase<Service | GroupedByStatus | null>> {
  if (uuid) {
    const service = await Model.findOne({ uuid }).populate(["userId"])

    if (!service) {
      return respond(null, {
        en: "Service not found",
        pt: "Serviço não encontrado"
      }, true)
    }

    return respond(serialize(service), {
      en: "Service found successfully",
      pt: "Serviço encontrado com sucesso"
    })
  }

  const services = await Model.find().populate(["userId"])

  const grouped: GroupedByStatus = Object.values(StatusId)
    .filter((id): id is StatusId => typeof id === "number")
    .map((id) => ({
      status: STATUSES[id],
      list: services.filter((s) => s.status === id).map(serialize)
    }))

  return respond(grouped, {
    en: "Services found successfully",
    pt: "Serviços encontrados com sucesso"
  })
}