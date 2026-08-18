function sumEvenOddInRange(start, end) {
    let even = 0
    let odd = 0

    if (end < start) {
        let temp = start
        start = end
        end = temp

    }
    for (i = start; i <= end; i++) {
        if (i % 2 == 0) {
            even = even + i
            
        }else{
            odd = odd + i
        }
    }
            return [even,odd]
}

module.exports = { sumEvenOddInRange };