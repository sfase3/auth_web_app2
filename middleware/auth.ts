export default defineNuxtRouteMiddleware((to)=>{
    const user = useSupabaseUser();
    
    if (user.value !== null) {
        if (to.path === "guest/auth") {
            return navigateTo("/")
        }
    } else {
        return navigateTo("/guest/auth")
    }
})
