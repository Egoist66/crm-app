import { useMutation, useQueryClient } from "@tanstack/vue-query"

export const useCreateComment = (callback: () => void) => {
    const config = useRuntimeConfig().public
    const slideOverStore = useSlideOverStore()

    const comment = ref<string>('')


    const {mutate, isPending, isError} = useMutation({
        mutationKey: ['create-comment', comment.value],
        mutationFn: async () => await DB.createDocument(config.DB_ID, config.COLLECTION_COMMENTS, ID.unique(), {
            text: comment.value,
            deal: slideOverStore.slideOver.card?.id
        }),
        onSuccess: () => {
            callback && callback()
            comment.value = ''
           
            
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const createComment = () => {
        if(!comment.value) return;


        mutate()
    }

    return {
        comment,
        createComment,
        isPending,
        isError
    }
}