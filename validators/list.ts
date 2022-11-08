

 export const MinLen = val => {
    if(val.length >= 8){
        return [true]
    } else{
        return [false,"Length is less than 8"]
    }
 }

 export const MailCheck = val => {
    if(val.split('').includes('@')){
        return [true]
    } else{
        return [false,"It's not a mail"]
    }
 }


 export const MinLen16 = val => {
    if(val.length >= 16){
        return [true]
    } else{
        return [false,"Length is less than 16"]
    }
 }

export const required = val => {
    if(val.length > 0){
        return [true]
    } else {
        return [false,"This field is required"]
    }
}



