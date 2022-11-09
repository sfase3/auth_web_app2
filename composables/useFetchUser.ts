

export const useFetchUser =() => {
  
  const supabase = useSupabaseClient()
 
    const signUp = async (mail:string, pass:string, nick:string) => {
      await supabase.auth.signUp({
        email: mail,
        password: pass,
        options: {
          data: {
            nickname: nick,
          }
        }
      })
      navigateTo('/')
    }

      
      const logIn = async(mail:string,pass:string) => {
        const { error } = await supabase.auth.signInWithPassword({
          email: mail,
          password: pass
        })
        if(!error){
        navigateTo('/')
        }
      }

      const logOut = async() => {
        await supabase.auth.signOut()
        navigateTo('/')
      }

      const updateVisiter = async(nick:string) => {
        await supabase.auth.updateUser({
          data: { nickname: nick }
        })
      }
        
  return {
    signUp,logIn,logOut,updateVisiter
  }      
}