    let arr = [1,0,0,1,1,0]

    let i = 0 , j = 0

    while(i<arr.length){
        if(arr[i]==1){
            //0
            let temp = arr[i]
            //0
            arr[i] = arr[j]
            //0
            arr[j] = temp
            j++
        }
        i++
    
    }
    console.log(arr)
