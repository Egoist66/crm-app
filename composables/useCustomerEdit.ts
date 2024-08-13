import { useMutation, useQuery } from '@tanstack/vue-query';
import { storage } from '../utils/appwrite.service';
import type { ICustomer } from '~/types/deals.types';


export interface ICustomerFormState extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> {

}


export const useCustomerEdit = (id: string) => {
    
    const config = useRuntimeConfig().public
    const {handleSubmit, defineField, setValues, setFieldValue, values} = useForm<ICustomerFormState>()

    const [nameField, nameFieldAttrs] = defineField('name')
    const [emailField, emailFieldAttrs] = defineField('email')
    const [fromSourceField, fromSourceFieldAttrs] = defineField('from_source')
    const [avatarField, avatarFieldAttrs] = defineField('avatar_url')

    const {data, isSuccess, isLoading, isRefetching, refetch} = useQuery({
        queryKey: ['get-customer', id],
        refetchOnReconnect: 'always',
        refetchOnMount: 'always',
        gcTime: 0,
        queryFn: async () => await DB.getDocument('crm-db', config.COLLECTION_CUSTOMERS, id),
    })


   watch(isSuccess,() => {

    if(isSuccess.value && data.value) {
        setValues(data.value as unknown as ICustomerFormState)

    }


   })

   


    const {mutate, isPending} = useMutation({
        mutationKey: ['update-customer', id],
        mutationFn: async (data: ICustomerFormState) => await DB.updateDocument(config.DB_ID, config.COLLECTION_CUSTOMERS, id, data),
        onError: (error) => {

            console.log(error)
        },
        onSuccess: () => {
            refetch()

        }
    })

    const onUpdate = handleSubmit((values) => {

        if(!values) return

        mutate({
            avatar_url: values.avatar_url,
            email: values.email,
            name: values.name,
            from_source: values.from_source
        })
    })

    return {
        nameField,
        nameFieldAttrs,
        emailField,
        emailFieldAttrs,
        fromSourceField,
        fromSourceFieldAttrs,
        avatarField,
        refetch,
        avatarFieldAttrs,
        handleSubmit,
        setFieldValue,
        isLoading,
        isRefetching,
        isSuccess,
        onUpdate,
        isPending,
        data,
        values
    }
}