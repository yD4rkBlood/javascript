//Creating a empty array

var myVector = []

//Creating vector with data

var numbers = [4, 1, 8, 5, 2, 7]
var names = ['Sniggers', 'Chiggas', 'Biggas']
var newVector = [20, 'SESI', true]

//Accessing the vector data

console.log(names[0])
console.log(newVector[2])

//Veryfing the lenght of the attributed vector

//               0         1        2          3           4
var fruits = ['Apple', 'Orange', 'Pear', 'Strawberry', 'Grape']

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Adding a new value at the end of the vector

fruits.push('Pineapple')

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])

}

fruits.forEach(item => {
    console.log('Item by forEach', item)
})

var newFruitsList = []
newFruitsList.push('Lemon')
newFruitsList.push('Watermelon')
console.log(newFruitsList)

//For With "In"

for (var pos in fruits) {
    console.log(fruits[pos])
}

for (var pos in newFruitsList) {
    console.log("newFruitList [" + pos + "]" + newFruitsList[pos])
}