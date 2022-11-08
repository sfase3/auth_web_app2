export default defineNuxtRouteMiddleware((to)=>{
    const user = useSupabaseUser();

    if(!user.value && to.path === '/info'){
        navigateTo('/auth')
    } else if(user.value && to.path === '/auth'){
        navigateTo('/')
    } else if(!user.value && to.path === '/users'){
        navigateTo('/auth')
    }  
})