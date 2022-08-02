//https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=true
function reverseArray(a) {

    let x = 0,y = a.length-1
    let l,r
    
    for( ; x<y ; x++ , y-- ){
        l = a[x]
        r = a[y]
        a[x] = r
        a[y] = l
    }
    return a
    //return a.reverse()
}