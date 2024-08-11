import { useQuery } from "@tanstack/vue-query"

/**
 * A hook to fetch and manage comments data.
 *
 * @return {object} The query response object containing comments data.
*/

export const useComments = (cardId: string) => {

    const config = useRuntimeConfig().public

    

    const response = useQuery({
        queryKey: ['dealComment', cardId],
        queryFn: async () => await DB.getDocument(config.DB_ID, config.COLLECTION_DEALS, cardId),
    })

 

    return {
        ...response
    }
}