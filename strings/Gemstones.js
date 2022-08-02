//https://www.hackerrank.com/challenges/gem-stones?isFullScreen=true
function gemstones(arr) {
    
    const iterating = arr[0].split('') //Nuestro arreglo a iterar
    const result = [] //Nuestro arreglo resultado para retornar su tamano
    const dummyArr = arr.slice(1) //Nuestro arreglo a partir de la 1ra posicion
    iterating.forEach(mineral =>{
        if(result.includes(mineral))return -1 //Verificamos que el mineral no sea una gema
        else {
            if (dummyArr.every(str => str.includes(mineral))) //Verificamos que el mineral se encuentre en todas las rocas
                result.push(mineral)
        }
    })
    return result.length
}