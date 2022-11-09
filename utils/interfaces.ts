import { Ref } from "nuxt/dist/app/compat/capi"

export interface Direct {
    id: number,
    title: string,
    path: string
}

export interface UseValue{
    field: Ref<string>,
    valid: Ref<boolean>,
    errMsg: Ref<string>
}