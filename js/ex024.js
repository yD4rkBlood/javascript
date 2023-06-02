var moviesList = [];

moviesList = JSON.parse(localStorage.getItem('moviesData'));
if (moviesList == null) {
    moviesList = [];
}

showMovies()

function showMovies() {
    var result = document.getElementById("result"); 
    result.innerHTML = ""; 

    for (var i = 0; i < moviesList.length; i++) {
        result.innerHTML += `<div class="tags"><img src="${moviesList[i].link}"><p>${moviesList[i].name}</p></div>`;
    }
}

console.log(moviesList);

function validateRegister(moviename, movieimage) {
    if (moviename !== '' && movieimage !== '') {
        return true;
    } else {
        return false;
    }
}

function Add() {
    var moviename = document.getElementById('moviename').value;
    var movieimage = document.getElementById('movieimage').value;

    var canAccess = validateRegister(moviename, movieimage);

    if (canAccess === false) {
        document.getElementById('verify').innerHTML = "<p class='verify'>The Name and the Image can't be empty</p>";
        return;
    }

    var movie = {
        name: moviename,
        link: movieimage
    };

    moviesList.push(movie);
    localStorage.setItem('moviesData', JSON.stringify(moviesList));

    document.getElementById("moviename").value = "";
    document.getElementById("movieimage").value = "";

    document.getElementById('verify').innerHTML = "";
    showMovies();
}

function Indicate() {
    var randomIndex = parseInt(Math.random() * moviesList.length);
    var randomMovie = moviesList[randomIndex].name;
    var randomImage = moviesList[randomIndex].link;

    var result2 = document.getElementById("result2");
    result2.innerHTML = `<div class="tags"><img src="${randomImage}"><p>${randomMovie}</p></div>`;
}

function Clear() {
    moviesList = []
    localStorage.setItem('moviesData', JSON.stringify(moviesList));
    showMovies()
}
