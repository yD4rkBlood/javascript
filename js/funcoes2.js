function calculateAvg(grade1, grade2) {
    var add = grade1 + grade2
    var avg = add / 2
    return avg
}

var student1 = calculateAvg(7, 8)
console.log(student1)
var student2 = calculateAvg(5, 6)
console.log(student2)

//Login

var user = "adm"
var password = 123

var canAccess = checkLogin(user, password)

if (canAccess == true) {
    console.log("You can access")
} else {
    console.log("You can't access")
}

function checkLogin(user, password) {
    if (user == '' || password == '') {
        return false
    }
    if (user == 'adm' || password == '123') {
        return true
    } else {
        return false
    }
}