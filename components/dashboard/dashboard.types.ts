import type { EnumStatus } from "~/types/deals.types";

export interface ICard {
    id: string;
    title: string;
    price: string;
    $created_at: string;
    companyName: string;
    status: string;
} 

export interface IColumn {
    id: EnumStatus;
    name: string;
    items: ICard[]
}