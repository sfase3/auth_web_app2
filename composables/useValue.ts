import {ref} from "vue"
import { UseValue } from "~~/utils/interfaces"

export default (name: string, [...validators]): UseValue => {
    const field = ref(name)
    const valid = ref(true)
    const errMsg = ref("")

    for(let i = 0; i < validators.length; i++){
        const bool = validators[i](field.value)
        if (bool[0] === false) {
            valid.value = false
            errMsg.value = bool[1]
        }
    }
    return { field, valid, errMsg }
}