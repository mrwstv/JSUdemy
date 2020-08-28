const numberOfFilms = +prompt('How many films have you watched already?', ''),
    lastWatched = prompt('One of the last watched films?', ''),
    rating = prompt('How did you rate it?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastWatched] = rating;

console.log(personalMovieDB);