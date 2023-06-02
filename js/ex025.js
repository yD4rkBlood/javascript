var registers = [];

registers = JSON.parse(localStorage.getItem('registereds'));
if (registers == null) {
    registers = [];
}

registeredUsers()

console.log(registers)

function Register() {
    var name = document.getElementById('name').value;
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var register = {
        name: name,
        user: user,
        password: password,
        confirmPassword: confirmPassword
    };

    var canAccess = validateRegister(name, user, password, confirmPassword);

    if (canAccess === false) {
        document.getElementById('verify').innerHTML = "<p class='verify'>Name, Password and Confirm Password can't be empty</p>";
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("user").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

    document.getElementById('verify').innerHTML = "";

    registers.push(register)
    localStorage.setItem('registereds', JSON.stringify(registers));

    registeredUsers()
}

function validateRegister(name, password, user, confirmPassword) {
    if (name !== '' && user !== '' && password !== '' && confirmPassword !== '') {
        return true;
    } else {
        return false;
    }
}

function registeredUsers() {
    var result = document.getElementById("result");
    result.innerHTML = "";

    registers.forEach((item, indice) => {
        result.innerHTML += `<div class="registereds"><strong>Name:</strong>${item.name}<strong>User:</strong>${item.user}<img class="bin" onclick="remove(${indice})" src="/img/angolano plants.jpg"></div>`;
    })

}

function Clear() {
    registers = []
    localStorage.setItem('registereds', JSON.stringify(registers));
    registeredUsers()
}

function remove(indice) {
    registers.splice (indice, 1)
    localStorage.setItem('registereds', JSON.stringify(registers));
    registeredUsers()
}