import { useMutation } from "@tanstack/vue-query"
import type { IDeal } from '../types/deals.types';


export interface IDealFormState extends Pick<IDeal,  'name' | 'price'> {
    customer: {
        name: string;
        email: string;
    };
    status: string
}

/**
 * Generates a function that creates a deal.
 *
 * @param {string} status - The status of the deal.
 * @param {() => void} [callback] - Optional callback function to be called after the deal is created.
 * @return {Object} An object containing the following properties:
 *   - isOpenForm: A boolean indicating whether the form is open.
 *   - handleSubmit: A function to handle form submission.
 *   - customerNameField: A field for the customer's name.
 *   - customerNameFieldAttrs: The attributes of the customer name field.
 *   - priceField: A field for the price.
 *   - priceFieldAttrs: The attributes of the price field.
 *   - customerEmailField: A field for the customer's email.
 *   - customerEmailFieldAttrs: The attributes of the customer email field.
 *   - nameField: A field for the name.
 *   - nameFieldAttrs: The attributes of the name field.
 *   - isPending: A boolean indicating whether the mutation is pending.
 *   - toggleOpenForm: A function to toggle the form's open state.
 *   - mutate: A function to trigger the mutation.
*/

export const useCreateDeal = (status: string, callback?: () => void) => {
   
    const config = useRuntimeConfig().public
    const isOpenForm = ref<boolean>(false)


    const {handleSubmit, defineField, handleReset} = useForm<IDealFormState>({
        initialValues: {
            status
        }
    })
    
    /*  Form Fields  */

    const [customerNameField, customerNameFieldAttrs] = defineField('customer.name')
    const [priceField, priceFieldAttrs] = defineField('price')
    const [customerEmailField, customerEmailFieldAttrs] = defineField('customer.email')
    const [nameField, nameFieldAttrs] = defineField('name')


    /*  Form Actions - Mutations */


    const {mutate, isPending} = useMutation({
        mutationKey: ['create-deal'],
        mutationFn: async (data: IDealFormState) => await DB.createDocument(
            config.DB_ID, 
            config.COLLECTION_DEALS, 
            ID.unique(), 
            data
        ),
        onSuccess(data){
            handleReset()


            // refetch
            callback && callback()
        }
    })





    const onSubmit = handleSubmit((data: IDealFormState) => {
        mutate(data)
    })


    const toggleOpenForm = (isOpen?: boolean) => {
        if(isOpen && (isOpen !== undefined || isOpen !== null)) {
            isOpenForm.value = isOpen
        }


        isOpenForm.value = !isOpenForm.value
    }


    return {
        isOpenForm,
        handleSubmit,
        customerNameField,
        customerNameFieldAttrs,
        priceField,
        priceFieldAttrs,
        customerEmailField,
        customerEmailFieldAttrs,
        nameField,
        nameFieldAttrs,
        isPending,
        toggleOpenForm,
        onSubmit,
    }
    
}