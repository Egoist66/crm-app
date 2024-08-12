import { useQuery } from "@tanstack/vue-query"

export const useCustomersTable = () => {

    const config = useRuntimeConfig().public


    const response = useQuery({
        queryKey: ['customers'],
        queryFn: async () => await DB.listDocuments(config.DB_ID, config.COLLECTION_CUSTOMERS),
        staleTime: 30000,
    
    })


    return {
        ...response
    }
}