import type { ICard } from "~/components/dashboard/dashboard.types"


const defaultValue: {card: ICard | null, isOpen: boolean} = {
    card: null,
    isOpen: false
}

export const useSlideOverStore = defineStore('slide', () => {
    const slideOver = ref<typeof defaultValue>(defaultValue)

    const setOpenSliderOver = ({card}: {card?: ICard | null}) => {
        slideOver.value.card = card ?? null
        slideOver.value.isOpen = true
    }

    const toggleSlideOver = (isOpen: boolean) => {
        slideOver.value.isOpen = isOpen
    }

    return {
        slideOver,
        setOpenSliderOver,
        toggleSlideOver
    }
})