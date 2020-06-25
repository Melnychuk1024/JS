'use strict';

const numbersOfFilms = prompt('How much films you watching?','');

const lastFilmOne = prompt('Останній фільм'),
    OcinkaFilmOne = prompt('Оцінка'),    
    lastfilmTwo = prompt('Останній фільм'),
    OcinkaFilmTwo = prompt('Оцінка');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilmOne] = OcinkaFilmOne;
personalMovieDB.movies[lastfilmTwo] = OcinkaFilmTwo;

console.log(personalMovieDB);
