//https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
function birthday(s, d, m) {
    // Write your code here
    let ways = 0
    let lastIndex = s.length-m
    let squareSum = 0
    let valid = true
    
    for(let i = 0; i <= lastIndex; i++){
        for(let j = i; j < i+m; j++){
            squareSum+= s[j]
            if(squareSum>d){
                valid = false
                break
            } 
        }
        if(squareSum===d && valid){
            ways+=1
        }
        squareSum = 0
        valid = true   
    }
    return ways
}