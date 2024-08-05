import { useQuery } from "@tanstack/vue-query"
import type { ICard, IColumn } from "~/components/dashboard/dashboard.types"
import { DashboardData } from "~/mock-db/dashboard.data"
import type { IDeal } from "~/types/deals.types"

/**
 * Returns an object containing the result of a query to fetch deals data and references to the dragged card and source column.
 *
 * @return {Object} An object containing the result of the query, the dragged card reference, and the source column reference.
 */
export const useDashboard = () => {

    const config = useRuntimeConfig().public

    const dragCard = ref<ICard | null>(null)
    const sourceCoulumn = ref<IColumn | null>(null)

    const result = useQuery({
        queryKey: ['deals'],
        staleTime: 30000,
        queryFn: async () => await DB.listDocuments(config.DB_ID, config.COLLECTION_DEALS),
        select: (data) => {
            const newBoard = [...DashboardData]
            const deals = data.documents as unknown as IDeal[]


            // deals.forEach((deal, i: number) => {
            //     if(deal.status === newBoard[i].id) {
            //         newBoard[i].items.push(deal as unknown as ICard)
            //     }
            // })

            newBoard.forEach(column => {
                column.items = [];
            })

            for(let deal of deals){
                const column = newBoard.find(col => col.id === deal.status)
                if(column){
                    column.items.push({
                        $created_at: deal.created_at,
                        id: deal.$id,
                        companyName: deal.customer.name,
                        price: deal.price.toString(),
                        title: deal.name,
                        status: column.name
                    })

                    
                }


            }

            return newBoard

            
        }
    })

    return {
        ...result,
        dragCard,
        sourceCoulumn
    }
}