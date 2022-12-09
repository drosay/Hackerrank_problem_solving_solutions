//https://www.hackerrank.com/challenges/truck-tour/problem?isFullScreen=true
function truckTour(petrolpumps) {
    let petrol = 0, distance = 0
    const SIZE = petrolpumps.length
    for(let i = 0; i < SIZE; i++){
       for(let j = 0; j < SIZE; j++){
           let index = i+j
           if(index>=SIZE)index-=SIZE
           petrol+=petrolpumps[index][0]
           distance+=petrolpumps[index][1]
           if(distance>petrol)break
       }
       if(petrol>=distance)return i
       petrol = 0
       distance = 0
    }
}