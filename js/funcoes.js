function showInfo() {
    console.log('The function was executed')
}

showInfo()
showInfo()
showInfo()

function IanCalculate(nr) {
    for (var i = 0; i <= 20; i++) {
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}

IanCalculate(5)
IanCalculate(8)
IanCalculate(65)

function IanCalucalteDouble(nr) {
    let double = nr * 2
    return double
}

var result =  IanCalucalteDouble(7)
console.log(result)