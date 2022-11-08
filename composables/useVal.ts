import {ref} from 'vue'

export  function useValue(name,[...validators]){
    const field = ref(name)
    const valid = ref(true)
    const err_msg = ref('')


    for(let i =0;i<validators.length;i++){

        
        let bool = validators[i](field.value);
        
        if(bool[0] === false){
            valid.value = false;
            err_msg.value = bool[1]
        }
    }
    return{
        field,valid,err_msg
    }

}