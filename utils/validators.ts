 export const MinLen = field => {
    return field.length >= 8 ? [true] : [false,"Length is less than 8"]
 }

 export const MailCheck = field => {
    return field.split("").includes("@") ? [true] : [false,"It's not a mail"]
 }

 export const MinLen16 = field => {
    return field.length >= 16 ? [true] : [false,"Length is less than 16"]
 }

export const required = field => {
    return field.length > 0 ? [true] : [false,"This field is required"]
}



