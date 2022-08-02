//https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true
function encrypt(code,min,max,rotate){
    while(true){
        code+=rotate
        if(code>max){
            rotate = code-max
            code = (min-1)
        }else return String.fromCharCode(code)
    }
}


function caesarCipher(s, k) {

    return s.split('').map(
        character =>{
            let code = character.charCodeAt(0)
            if(97<= code && code <= 122) return encrypt(code,97,122,k)
            else if(65<= code && code <= 90) return encrypt(code,65,90,k)
            else return character
        }
    ).join('')

}