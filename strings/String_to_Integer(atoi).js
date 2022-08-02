//https://leetcode.com/problems/string-to-integer-atoi/
var myAtoi = function(s) {
    
    const BIGGEST = Math.pow(2,31)-1, SMALLEST = 0-Math.pow(2,31)
    const ZERO = 48, NINE = 57
    let positive = !s.includes('-')
    let result = '0'
    let counter = true
    s = s.trim()
    
    for(let character of s){
        
        let charCode = character.charCodeAt(0)
        if( character === '-' || character === '+' ){
            if(counter && result.length === 1){
                counter = false
                continue
            }return theNumber(result,positive)
        }
        if( charCode >= ZERO && charCode <= NINE ){
            
            result+=character
            
            if( 
                parseInt(result,10) > BIGGEST+1
                || parseInt(result,10) > BIGGEST
                || parseInt(result,10) === BIGGEST && positive
            ){
                if(positive) return BIGGEST
                return SMALLEST
            }        
        }else return theNumber(result,positive)
    }
    return theNumber(result,positive)
};

let theNumber = (number,positive) => {
    if(positive) return parseInt(number,10)
    return 0-parseInt(number,10)
}