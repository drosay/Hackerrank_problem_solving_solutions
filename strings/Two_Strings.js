//https://www.hackerrank.com/challenges/two-strings?isFullScreen=true
function yesNo(s1,s2){
    let yes = false
    for(let letter of s1){
        if(s2.includes(letter)){
            yes = true
            break
        }
    }
    if(yes)return 'YES'   
    return 'NO'
}
function twoStrings(s1, s2) {
    if(s1.length>s2.length)return yesNo(s2,s1)
    else return yesNo(s1,s2)
}