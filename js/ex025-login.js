var registers = [];

registers = JSON.parse(localStorage.getItem('registereds'));
if (registers == null) {
    registers = [];
}

console.log(registers)

function Login() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    registers.forEach(item => {
        if (user == item.user && password == item.password) {
            return true;
        }
    })

    var canAccess = validateRegister(user, password);

    if (canAccess === false) {
        document.getElementById('verify').innerHTML = "<p class='verify'>User and Password can't be empty</p>";
        return;
    }

    if (checkLogin(user, password) == true) {
        result.innerHTML = `<p class=welcome>Welcome ${user}</p>`;
    } else {
        result.innerHTML = `<p class=wrong>User or Password is Wrong</p>`;
    }

    document.getElementById("user").value = "";
    document.getElementById("password").value = "";

    document.getElementById('verify').innerHTML = "";
}

function validateRegister(user, password) {
    if (user !== '' && password !== '') {
        return true;
    } else {
        return false;
    }
}

function checkLogin(user, password) {
    for (var i in registers) {
        if (user == registers[i].user && password == registers[i].password) {
            return true;
        }
    }
    return false
}

function SignUp() {
    location.href = 'ex025.html';
}