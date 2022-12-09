function countPairs(numbers, k) {
    // Write your code here
    
    numbers  = [...new Set(numbers)]
    
    if(k === 0)return numbers.length
    
    let size = numbers.length
    let result = 0
    
    for(let i = 0,j = size; i<=j; i++,j--){
        console.log(i,j)
        if(numbers.indexOf(numbers[i]+k) !== -1)result+=1
        if(numbers.indexOf(numbers[j]+k) !== -1 && i<j)result+=1
    }
    return result
}


console.log(countPairs([1,2,3,4,5,6],2))