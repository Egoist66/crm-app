import { useMutation, useQuery } from '@tanstack/vue-query';
import { storage } from '../utils/appwrite.service';
import type { ICustomer } from '~/types/deals.types';


interface ICustomerFormState extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> {

}


export const useCustomerEdit = (id: string) => {
    
    const config = useRuntimeConfig().public
    const {handleSubmit, defineField, setValues, setFieldValue, values} = useForm<ICustomerFormState>()


    const {data, isSuccess} = useQuery({
        queryKey: ['get-customer', id],
        queryFn: async () => await DB.getDocument(config.DB_ID, config.COLLECTION_CUSTOMERS, id),
    })

    watch(isSuccess, () => {
        
        setValues(data.value as unknown as ICustomerFormState)

        
    })

    const [nameField, nameFieldAttrs] = defineField('name')
    const [emailField, emailFieldAttrs] = defineField('email')
    const [fromSourceField, fromSourceFieldAttrs] = defineField('from_source')
    const [avatarField, avatarFieldAttrs] = defineField('avatar_url')


    return {
        nameField,
        nameFieldAttrs,
        emailField,
        emailFieldAttrs,
        fromSourceField,
        fromSourceFieldAttrs,
        avatarField,
        avatarFieldAttrs,
        handleSubmit,
        setFieldValue,
        values
    }
}