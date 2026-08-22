import { Language } from "@/types/messages";

// DOMAINS
export enum StatusId {
  Open = 1,
  Progress = 2,
  Closed = 3,
}

export enum CategoriesId {
  Software = 1,
  Hardware = 2,
  Backup = 3,
  Support = 4,
  Network = 5,
}

export interface Status {
  id: StatusId;
  name: Record<Language, string>;
}

export interface Category {
  id: CategoriesId;
  name: Record<Language, string>;
  basePrice: number;
}

export const DEFAULT_TECHNICIAN = {
  uuid: "system",
  name: "Sistema"
} as const

export const STATUSES: Record<StatusId, Status> = {
  [StatusId.Open]: { id: StatusId.Open, name: { pt: "Aberto", en: "Open" } },
  [StatusId.Progress]: { id: StatusId.Progress, name: { pt: "Em atendimento", en: "In Progress" } },
  [StatusId.Closed]: { id: StatusId.Closed, name: { pt: "Encerrado", en: "Closed" } },
};

export const CATEGORIES: Record<CategoriesId, Category> = {
  [CategoriesId.Software]: { id: CategoriesId.Software, name: { pt: "Software", en: "Software" }, basePrice: 150 },
  [CategoriesId.Hardware]: { id: CategoriesId.Hardware, name: { pt: "Hardware", en: "Hardware" }, basePrice: 300 },
  [CategoriesId.Backup]: { id: CategoriesId.Backup, name: { pt: "Recuperação de Dados", en: "Backup" }, basePrice: 650 },
  [CategoriesId.Support]: { id: CategoriesId.Support, name: { pt: "Suporte", en: "Support" }, basePrice: 100 },
  [CategoriesId.Network]: { id: CategoriesId.Network, name: { pt: "Conexão", en: "Network" }, basePrice: 80 },
};

// DTO
export interface Create {
  title: string;
  description: string;
  category: CategoriesId;
  service: string;
  userId: string;
  additionalServices?: { name: string; price: string }[];
}

export interface Ticket {
  uuid: string;
  title: string;
  description: string;
  service: string;
  price: string;
  status: Status;
  category: Category;
  user: {
    uuid: string;
    name: string;
  };
  technician: {
    uuid: string;
    name: string;
  };
  additionalServices: { name: string; price: string }[];
  additionalValue: string;
  executedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type GroupedByStatus = { status: Status; list: Ticket[] }[];