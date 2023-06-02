var carList = []

var car = {
    year: '2008',
    model: 'MX-8',
    marca: 'Mitsubish'
}

console.log(car.year + ' - ' + car.model + ' - ' + car.marca)
carList.push(car)
console.log(carList.length)

var car = {
    year: '1992',
    model: 'Belina',
    marca: 'Ford'
}

console.log(car.year + ' - ' + car.model + ' - ' + car.marca)

carList.push(car)
console.log(carList.length)

for (var pos in carList) {
    console.log(car.model)
}