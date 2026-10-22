    let arr = [1,0,0,1,1,0]

    let i = 0 , j = 0

    while(i<arr.length){
        if(arr[i]==1){
            //1 ko temp me store
            let temp = arr[i]
            //zero ko i me store
            arr[i] = arr[j]
            //1 ki value ko j me store
            arr[j] = temp
            //j tab tak increment hoga jab 1 milega
            j++
        }
        i++
    
    }
    console.log(arr)
