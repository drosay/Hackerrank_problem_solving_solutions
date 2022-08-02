const palindrome = s => s === s.split('').reverse().join('')
function palindromeIndex(s) {
    if(palindrome(s)) return -1
    else{
        let i = 0
        let j = s.length - 1
        for(;i<j;i++,j--){
            if(s[i] != s[j]){
                break
            }
        }   
        if(s[i] === s[j-1] && s[i+1] !== s[j]){
            let k = i
            let l = j-1
            for(;k<l;k++,l--){
                console.log(s[k], s[l])
                if(s[k] !== s[l] || k == l){
                    console.log("entro1")
                    return -1
                }     
            }
            return j
        }
        if(s[i+1] === s[j]){
            let k = i+1
            let l = j 
            for(;k<l;k++,l--){
                if(s[k] !== s[l] || k == l)return -1    
            }
            return i
        }
        return -1
    }
}