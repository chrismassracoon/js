let numberOfFilms = prompt('Cколько фильмов вы уже посмотрели?');
let personalMovieDB = {
count : numberOfFilms,
movies : {},
actors : {},
genres : [],
prviat : false,
}

let firstQuestion = prompt('Один из последних фильмов?');
let userGrade = prompt('На сколько оцените его?');

personalMovieDB.movies[firstQuestion] = userGrade;

console.log(personalMovieDB.movies);