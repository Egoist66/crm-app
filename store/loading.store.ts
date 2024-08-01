export const useLoadingStore = defineStore('isLoading', () => {
    const isLoading = ref<boolean>(true)
    const setLoading = (status: boolean) => {
        isLoading.value = status
    }
    return {
        isLoading,
        setLoading
    }
})