import { Ref } from "nuxt/dist/app/compat/capi"

export interface Direct {
    id: number,
    title: string,
    path: string
}

export interface UseVal{
    field: Ref<string>,
    valid:Ref<boolean>,
    err_msg:Ref<string>
}