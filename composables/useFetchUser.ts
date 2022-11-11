export const useFetchUser = () => {
  const supabase = useSupabaseClient()
 
  const signUp = async (mail: string, pass: string, nick: string) => {
    await supabase.auth.signUp({ email: mail, password: pass, options: { data: { nickname: nick } }})
    const user = useSupabaseUser()
    const supabaseUser = baseUser()
    supabaseUser.value = user
    navigateTo("/")  
}

  const logIn = async (mail: string, pass: string) => {
    const { error } = await supabase.auth.signInWithPassword({email: mail, password: pass}) 
    const user = useSupabaseUser()
    const supabaseUser = baseUser()
    supabaseUser.value = user
    return error === null ? navigateTo("/") : console.log("error") 
}

  const logOut = async () => {
    await supabase.auth.signOut()
    const supabaseUser = baseUser()
    supabaseUser.value = null
    navigateTo("/") 
  }

  const initUser = async () => {
    const auth = useSupabaseUser()
    const supabaseUser = baseUser()
    supabaseUser.value = auth.value 
  }

  const updateVisiter = async (nick: string) => {
    await supabase.auth.updateUser({ data: { nickname: nick } })
  }   

  return { signUp, logIn, logOut, updateVisiter, initUser }      
}