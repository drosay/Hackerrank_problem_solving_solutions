//https://www.hackerrank.com/challenges/weighted-uniform-string/problem?isFullScreen=true
let staticIndex = (()=>{
    let i = 0
    return ()=>{
        return i++
    }
})()
let index = staticIndex()
const weights = []

function weightedUniformStrings(s, queries) {
    
    let tempWeight = 0
    let tempChar = ''
    let counterweight = 96
    
    for(;index<s.length;){
        if(s[index] === s[index+1]){
            tempChar = s[index]
            findWeight(tempChar,tempWeight,counterweight,s)
            continue
        }
        weights.push(s.charCodeAt(index)-counterweight)
        index = staticIndex()
    }
    
    return queries.map(index => weights.includes(index)? "Yes":"No")
}

function findWeight(tempChar,tempWeight,counterweight,s){
    while(true)
        if(s[index] === tempChar){
            tempWeight += s.charCodeAt(index)-counterweight
            index = staticIndex()
            weights.push(tempWeight)
        }
        else return
}