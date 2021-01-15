// function snakeToCamel(str) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let result = ''

//     let toCamelCase = false
//     for(let char of str) {
//         if(char === '_'){
//             toCamelCase = true
//         }else{
//             if(toCamelCase){
//                 char = char.toUpperCase()
//                 result += char
//                 toCamelCase = false
//             }else{
//                 result += char
//             }
//         }
//     }
//     return result
// }

function snakeToCamel(str){
    let result = ''

    let toCamelCase = false

    for(let i = 0; i < str.length; i++){
        if(str[i] === '_' && (str[i-1] !== '_' && str[i+1] !== '_')){
            toCamelCase = true
        }else{
            if(toCamelCase){
                char = str[i].toUpperCase()
                result += char
                toCamelCase = false
            }else{
                result += str[i]
            }
        }
    }
    return result
}