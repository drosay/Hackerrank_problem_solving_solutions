//https://www.hackerrank.com/challenges/alternating-characters?isFullScreen=true
function alternatingCharacters(s) {
    let currentLetter = null
    let index = 0
    let deleted = 0
    s.split('').forEach( letter =>{
        if(currentLetter === letter)deleted+=1
        else currentLetter = letter
    })
    return deleted 
}