let numberOfFilms = +prompt("How many films did you watched already?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilm = prompt("Your last watched film?", "");
let grade = +prompt("Your grade", "");
let lastFilm2 = prompt("Your last watched film?", "");
let grade2 = +prompt("Your grade", "");

personalMovieDB.movies[lastFilm] = grade;
personalMovieDB.movies[lastFilm2] = grade2;

console.log(personalMovieDB);
