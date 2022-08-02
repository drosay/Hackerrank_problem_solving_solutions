//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
    // Write your code here
    let maxSum = 0, minSum = 0
    let max = arr[0],min = arr[0]
    
    for(let i = 1; i<=4; i++){
        if(max<arr[i]){
            minSum+=max
            max = arr[i]
        }else minSum+=arr[i]
        
        if(min>arr[i]){
            maxSum+=min
            min = arr[i]
            
        }else maxSum+=arr[i]
    }
    
    console.log(`${minSum} ${maxSum}`)
}