//https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true
function pangrams(s) {
    let is = true
    const letters = "abcdefghijklmnopqrstuvwxyz"
    s = s.toLowerCase()
    for(let letter of letters){
        if(!s.includes(letter)){
            is = false
            break
        }
    }
    if(is) return "pangram"
    return "not pangram"
}
console.log(pangrams("The quick brown fox jumps over the lazy dog"))