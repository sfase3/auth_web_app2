export default defineNuxtPlugin(nuxtApp => {

    const app = useSupabaseClient();
    app.auth.initialize();
    console.log(app)
    
    useFetchUser().initUser()
    
})