//https://www.hackerrank.com/challenges/anagram?isFullScreen=true
function anagram(s) {
    if(s.length%2!=0)return -1
    else return howMuch(s.slice(0,s.length/2).split(''),s.slice(s.length/2).split(''))
 }
 
 function howMuch(first,scond){
     first.forEach((firstChar,index) =>{
         if(scond.includes(firstChar)){
             scond[scond.indexOf(firstChar)] = 0
             first[index] = 0
         }
     })
     return first.join('').split(0).join('').length
 }