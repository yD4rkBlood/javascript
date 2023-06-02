function calculateAvg(grade1, grade2) {
    var add = grade1 + grade2;
    var average = add / 2;
    return average;
}

function Average() {
    var name = document.getElementById('name').value;

    var grade1 = parseInt(document.getElementById('grade1').value);
    var grade2 = parseInt(document.getElementById('grade2').value);

    var validate = validateGrade(grade1, grade2)

    var average = calculateAvg(grade1, grade2);

    let result = document.getElementById('result');
    result.innerHTML = `${name}'s average grade is ${average}`;

    if (returnAvg(average)) {
        result.innerHTML += "<br><strong>Congratulations, you are approved!</strong>";
    } else {
        result.innerHTML += "<br><strong>Sorry, you did not pass.</strong>";
    }
}

function returnAvg(average) {
    if (average >= 7) {
        return true;
    } else {
        return false;
    }
}

function validateGrade(grade1, grade2) {
    if (grade1 > 10) {
        alert("Grade 1 can't be higher than 10");
        return;
    }

    if (grade2 > 10) {
        alert("Grade 2 can't be higher than 10");
        return;
    }
}
