

export function useFetchUser() {
  
  const supabase = useSupabaseClient()
 


    const signUp = async (mail:string,pass:string,nick:string) => {
      
        const { data,error } = await supabase.auth.signUp({
          email: mail,
          password: pass,
          options: {
            data: {
              nickname: nick,
            }
          }
        })
        console.log(data)
        navigateTo('/')
        
      }
      
      const logIn = async(mail:string,pass:string) => {
        localStorage.removeItem('user')
        const { data,error } = await supabase.auth.signInWithPassword({
          email: mail,
          password: pass
        })
        if(!error){
        navigateTo('/')
        }
      }

      const logOut = async() => {
        const { error } = await supabase.auth.signOut()
        navigateTo('/')
      }

      const updateVisiter = async(nick:string) => {
        const { data, error } = await supabase.auth.updateUser({
          data: { nickname: nick }
        })
       

      }
        
    return{
    signUp,logIn,logOut,updateVisiter
    }      
    }