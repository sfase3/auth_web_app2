import { Ref } from "nuxt/dist/app/compat/capi";
import { MailCheck, MinLen, required } from "~~/utils/validators";

export default (logIn:boolean) => {
    const supaDB = useFetchUser()
    const username = useState<string>('nick',()=>"")
    const email = useState<string>('email',()=>'')
    const pass = useState<string>('valuePass',()=>'');
    const emailIsValid:Ref<boolean> = useState<boolean>('isValid',() => false);
    const emailErr:Ref<string> = useState<string>('error',()=>'')
    const passIsValid:Ref<boolean> = useState<boolean>('isValidPass',() => false);
    const passErr:Ref<string> = useState<string>('errorPass',()=>'')

    watch(email,()=>{
        const {valid,errMsg} = useValue(email.value,[MailCheck,required])
        emailIsValid.value = valid.value
        emailErr.value = errMsg.value
    })
    
    watch(pass,()=>{
        const {valid,errMsg} = useValue(pass.value,[MinLen,required])
        passIsValid.value = valid.value
        passErr.value = errMsg.value 
    })
    const checkValid = () =>{
     if(!emailIsValid.value || !passIsValid.value) {
         return
    } 
    console.log('azazza')
    return logIn ? supaDB.logIn(email.value, pass.value) : supaDB.signUp(email.value, pass.value, username.value)
}

return{
    checkValid,email,emailErr,pass,passErr,username
}
}