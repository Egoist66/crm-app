import type { ICard } from "~/components/dashboard/dashboard.types"


const defaultValue: {card: ICard | null, isOpen: boolean} = {
    card: null,
    isOpen: false
}

export const useSlideOverStore = defineStore('slide', () => {
    const slideOver = ref<typeof defaultValue>(defaultValue)

    const setOpenSliderOver = (card: ICard | null) => {
        slideOver.value = {
            card,
            isOpen: true
        }
    }

    const toggleSlideOver = () => {
        slideOver.value = {
            ...slideOver.value,
            isOpen: !slideOver.value.isOpen
        }
    }

    return {
        slideOver,
        setOpenSliderOver,
        toggleSlideOver
    }
})