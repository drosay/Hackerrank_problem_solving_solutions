//https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true
function rotateLeft(d, arr) {
    const arrRotated = []
    const SIZE = arr.length
    
    arr.forEach((item,index) =>{
        let p = index-d
        while(p<0){
            p = SIZE+p
        }
        arrRotated[p] = item
    })
    
    return arrRotated
}