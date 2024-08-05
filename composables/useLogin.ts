import { account, ID } from "~/utils/appwrite.service";


/**
 * Returns an object containing functions and variables for handling login and registration.
 *
 * @return {Object} An object with the following properties:
 *   - `email`: A reactive reference to the email input.
 *   - `password`: A reactive reference to the password input.
 *   - `name`: A reactive reference to the name input.
 *   - `login`: A function that handles the login process.
 *   - `logout`: A function that handles the logout process.
 *   - `register`: A function that handles the registration process.
 */
export const useLogin = () => {

  const {setLoading} = useLoadingStore();
  const {setUser, setAuth, clear} = useAuthStore()
  const router = useRouter()
  
  const email = ref<string>('')
  const password = ref<string>('')
  const name = ref<string>('')


  const resetFields = () => {
    email.value = ''
    password.value = ''
    name.value = ''
  }

  const login = () => {
    setLoading(true)

    account.createEmailPasswordSession(email.value, password.value)
      .then(() => {
        return account.get().then((userData) => {
          if(userData) {
            setUser(userData)
            setAuth(userData.status)
          }
        })
      })
      .then(async () => {
        await router.replace({path: '/'})

        resetFields()
      })
      .catch ((e: Error | any) => {
        console.log(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const register = () => {

    setLoading(true)
   
    account.create(
      ID.unique(), 
      email.value, 
      password.value, 
      name.value
    )
    .then(async () => {
      await router.replace({path: '/login'})
    })
  
    .catch ((e: Error | any) => {
      console.log(e.message)
    }) 
    .finally(() => {
      setLoading(false)

    }) 
    
  }

  const logout = () => {
    setLoading(true)
    clear()
    account.deleteSession("current")
      .then(async () => {
        await router.replace({path: '/login'})
      })
      .finally(() => {
        setAuth(false)
        setLoading(false)
      })
  }

  return {
    email,
    password,
    name,
    login,
    logout,
    register
  }
}

