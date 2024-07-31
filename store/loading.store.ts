export const useLoadingStore = defineStore('isLoading', () => {
    const isLoading = ref<boolean>(false)
    const setLoading = (status: boolean) => {
        isLoading.value = status
    }
    return {
        isLoading,
        setLoading
    }
})