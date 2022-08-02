//https://www.hackerrank.com/contests/ieeextreme-warmup/challenges/robot-challenge/problem
function processData(x,y,moves) {
    
    const directions = moves.replace(/[0-9]/g,' ').split(' ').filter(direction => direction != '')
    const steps = moves.replace(/[A-Z]/g,' ').split(' ').filter(step => step != '')
    const size = steps.length
    let index = 0
    for(;index<size;index++){
        if(directions[index] === 'U') y+=parseInt(steps[index],10)
        else if(directions[index] === 'D')y-=parseInt(steps[index],10)
        else if(directions[index] === 'R')x+=parseInt(steps[index],10)
        else if(directions[index] === 'L')x-=parseInt(steps[index],10)
    }
    return `${x} ${y}`
} 

process.stdin.resume()
process.stdin.setEncoding("ascii")

_input = "";
currentLine = 0

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n')
    main()
});

function readLine(){
    return _input[currentLine++]
}

function main(){
    
    let testCases = parseInt(readLine().replace(/\s+$/,''),10)
    let result = ''
    for(let i = 0; i<testCases; i++){
        
        let coordinates = readLine().replace(/\s+$/,'').split(' ')
        let x = parseInt(coordinates[0],10)
        let y = parseInt(coordinates[1],10)
        let moves = readLine().replace(/\s+$/,'').split(' ')[0]
        
        result += processData(x,y,moves)+'\n'
    }
    console.log(result)
}