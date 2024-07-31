interface IAuthStore  {
    email: string;
    name: string;
    status: boolean;
}

const defaultValue: {user: IAuthStore} = {
    user: {
        email: '',
        name: '',
        status: false
    }
} 

export const useAuthStore = defineStore('auth', () => {
    const user = ref<IAuthStore>(defaultValue.user)

    const isAuth = (): boolean => {
        return user.value.status
    }

    const setAuth = (status: boolean) => {
        user.value.status = status
    }

    const setUser = (data: IAuthStore) => {
        user.value = data
    }

    const clear = () => {
        user.value = defaultValue.user
    }

    return {
        user,
        isAuth,
        setAuth,
        setUser,
        clear
    }
})

