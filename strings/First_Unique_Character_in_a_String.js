//https://leetcode.com/problems/first-unique-character-in-a-string/
var firstUniqChar = function(s) {
    const charactersCount = {}
    s.split('').forEach(letter => {
        charactersCount[letter] = charactersCount[letter]+1 || 1
    })
    const entries = Object.entries(charactersCount)
    for(let [key,value] of entries){
        if(value === 1) return s.indexOf(key)
    }
    return -1
};