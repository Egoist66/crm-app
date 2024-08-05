import type { IColumn } from "~/components/dashboard/dashboard.types"
import { EnumStatus } from "~/types/deals.types"


export const DashboardData: IColumn[] = [
    {
        id: EnumStatus.TODO,
        name: 'Incoming',
        items: []
    },
    {
        id: EnumStatus.TOBEAGREED,
        name: 'Under Approval',
        items: []
    },
    {
        id: EnumStatus.IN_PROGRESS,
        name: 'In Progress',
        items: []
    },
    {
        id: EnumStatus.PRODUCED,
        name: 'Produced',
        items: []
    },
    {
        id: EnumStatus.DONE,
        name: 'For Shipping',
        items: []
    },
]