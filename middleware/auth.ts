export default defineNuxtRouteMiddleware((to)=>{
    const user = useSupabaseUser();
    console.log('ddd')
    console.log(user)
    if(!user.value && to.path === '/info'){
        navigateTo('/auth')
    } else if(user.value && to.path === '/auth'){
        navigateTo('/')
    } else if(!user.value && to.path === '/users'){
        navigateTo('/auth')
    }  
})
