//https://www.hackerrank.com/challenges/sherlock-and-valid-string?isFullScreen=true
function isValid(s) {
    const frequency = {}
    let valid = 0
    let index = 0
    s.split('').forEach(letter =>{
        if(frequency.hasOwnProperty(letter)){
            frequency[letter] += 1
        }else frequency[letter] = 1
    })
    const frequencyArr = Object.values(frequency)

    for(;index < frequencyArr.length;index++){
        if(index%2 === 0)valid += frequencyArr[index]
        else valid-= frequencyArr[index]
    }
    if(valid === -1 || valid === 1 )return 'YES'
    return 'NO'
}