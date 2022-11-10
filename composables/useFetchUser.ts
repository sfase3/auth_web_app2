
export const useFetchUser = () => {
  const supabase = useSupabaseClient()
 
  const signUp = async (mail: string, pass: string, nick: string) => {
  await supabase.auth.signUp({ email: mail, password: pass, options: { data: { nickname: nick } }})
  }

  const logIn = async (mail: string, pass: string) => {
    const { error } = await supabase.auth.signInWithPassword({email: mail, password: pass}) 
    return error === null ? navigateTo('/') : console.log('logIn error')
  }

  const logOut = async () => {
    await supabase.auth.signOut()
    return navigateTo('/')
  }

  const updateVisiter = async (nick: string) => {
    await supabase.auth.updateUser({ data: { nickname: nick } })
  }   

  return { signUp, logIn, logOut, updateVisiter }      
}