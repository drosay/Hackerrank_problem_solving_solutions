//https://www.hackerrank.com/challenges/making-anagrams?isFullScreen=true
function makingAnagrams(s1, s2) {
    let results = 0
    s2 = s2.split('')
    s1.split('').forEach(letter=>{
        if(s2.includes(letter)){
            results++
            s2.splice(s2.indexOf(letter),1)
        }
    })
    return s1.length-results+s2.length
}