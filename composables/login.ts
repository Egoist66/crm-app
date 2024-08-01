import { account, ID } from "~/utils/appwrite.service";
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


  /**
 * Asynchronously logs in the user by creating an email password session with the provided email and password.
 * If successful, retrieves the user data and sets the user state. Resets the fields and navigates to the home page.
 *
 * @return {Promise<void>} A Promise that resolves when the login process is complete.
 */
  const login = async(): Promise<void> => {
    setLoading(true)

    try {
      await account.createEmailPasswordSession(email.value, password.value)
      const userData = await account.get()
      if(userData){
        setUser(userData)
        setAuth(userData.status)
        await router.replace({path: '/'})


      }

      resetFields()

    } catch (e: Error | any) {
      console.log(e.message)
      
    }
    finally {
      setLoading(false)

    }
    
    


  }

  /**
   * Asynchronously registers a new user by creating an account with the provided email, password, and name.
   * Navigates to the login page after successful registration.
   *
   * @return {Promise<void>} A Promise that resolves when the registration process is complete.
   */
  const register = async(): Promise<void> => {

    setLoading(true)
   
    try {
      const response = await account.create(
        ID.unique(), 
        email.value, 
        password.value, 
        name.value
      )
      await router.replace({path: '/login'})
    }
    catch (e: Error | any) {
      console.log(e.message)
    }
    finally {
      setLoading(false)
    }
    
  }

  const logout = async () => {
    setLoading(true)
    try {
      clear()
      await account.deleteSession("current")
      await router.replace({path: '/login'})
      setAuth(false)
    }
    catch (e: Error | any) {
      console.log(e.message)
    }
    finally {
      setLoading(false)
    }
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
