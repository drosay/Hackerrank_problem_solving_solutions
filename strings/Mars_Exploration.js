//https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
function marsExploration(s) {
    // Write your code here
    const sosArr = s.split('');
    let i = 0;
    let radiation = 0;
    
    for(;i < sosArr.length;){
        if(sosArr[i] != 'S')radiation++;
        if(sosArr[i+1] != 'O')radiation++;
        if(sosArr[i+2] != 'S')radiation++;
        i+=3
    }
    
    return radiation;
}