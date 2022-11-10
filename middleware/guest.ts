export default defineNuxtRouteMiddleware((to)=>{
    const user = useSupabaseUser();
    
    if(user.value === null) {
        if(to.path === "user/info"){
            return navigateTo("guest/auth")
        } else if(to.path === "user/users"){
            return navigateTo("guest/auth")
        }
    }
})