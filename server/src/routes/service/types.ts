import { Language } from "@/types/messages";

// DOMAINS
export enum StatusId {
  Inactive = 0,
  Active = 1,
}

export interface Status {
  id: StatusId;
  name: Record<Language, string>;
}

export const STATUSES: Record<StatusId, Status> = {
  [StatusId.Inactive]: { id: StatusId.Inactive, name: { pt: "Inativo", en: "Inactive" } },
  [StatusId.Active]: { id: StatusId.Active, name: { pt: "Ativo", en: "Active" } },
};

// DTO
export interface Create {
  title: string;
  price: number;
  userId: string;
}

export interface Service {
  uuid: string;
  title: string;
  price: string;
  status: Status;
  user: {
    uuid: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type GroupedByStatus = { status: Status; list: Service[] }[];