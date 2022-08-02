function isPangram(pangram) {
    let result = []
    const letters = "abcdefghijklmnopqrstuvwxyz"
    pangram = pangram.toLowerCase()
    for(let letter of pangram){
        if(letters.includes(letter)){
            result.push(1)
            continue
        }
        result.push(0)
    }
    return result.join("")
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

