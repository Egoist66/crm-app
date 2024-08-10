import { useMutation, useQuery } from "@tanstack/vue-query"
import type { ICard, IColumn } from "~/components/dashboard/dashboard.types"
import { DashboardData } from "~/mock-db/dashboard.data"
import type { EnumStatus, IDeal } from "~/types/deals.types"


type TypedMutationVars = {
    docId: string;
    status?: EnumStatus;
}

/**
 * Returns an object containing the result of a query to fetch deals data and references to the dragged card and source column.
 *
 * @return {Object} An object containing the result of the query, the dragged card reference, and the source column reference.
 */

export const useDashboard = () => {

    const config = useRuntimeConfig().public

    const dragCard = ref<ICard | null>(null)
    const sourceCoulumn = ref<IColumn | null>(null)

    const response = useQuery({
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


    const {mutate, isPending} = useMutation({
        mutationKey: ['move-card'],
        mutationFn: async ({docId, status}: TypedMutationVars) => (
            DB.updateDocument(config.DB_ID, config.COLLECTION_DEALS, docId, {
                status
            })
        ),
        onSuccess(data){
            response.refetch()
        },
        onError(error) {
            console.log(error)
        }
    })


    /**  Drag and Drop columns mechanism  */

    const handleDragStart = (card: ICard, column: IColumn) => {
        dragCard.value = card
        sourceCoulumn.value = column
    }

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault()

    }

    const handleDrop = (targetColumn: IColumn) => {
        if(dragCard.value && sourceCoulumn.value) {
            mutate({
                docId: dragCard.value.id,
                status: targetColumn.id
            })
        }
    }

    return {
        ...response,
        dragCard,
        sourceCoulumn,
        handleDragStart,
        handleDragOver,
        handleDrop
    }
}