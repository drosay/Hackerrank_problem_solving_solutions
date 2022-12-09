const swapper = (arr,l,r) => {

    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp

}

const partition = (arr,l,r) => {

    let pivot = arr[Math.floor((r + l)/2)]
    let i = l
    let j = r

    while (i <= j) {

        while(arr[i]<pivot)i++

        while(arr[j]>pivot)j--

        if(i<=j) {
            swapper(arr, i, j)
            i++
            j--
        }
    }

    return i

}

const quickSort = (arr,l,r) => {

    let index
    
    if(arr.length>1){

        index = partition(arr,l,r)

        if(l<index-1)quickSort(arr,l,index-1)
        
        if(index<r)quickSort(arr,index,r)
    }

    return arr

}

const numeritos = [2,4,6,7,8,9,10,1,3,5,7,9]
console.log(quickSort(numeritos,0,numeritos.length))