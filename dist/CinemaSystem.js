"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    MovieGenre[MovieGenre["Drama"] = 1] = "Drama";
    MovieGenre[MovieGenre["Adventure"] = 2] = "Adventure";
    MovieGenre[MovieGenre["Animation"] = 3] = "Animation";
    MovieGenre[MovieGenre["Romance"] = 4] = "Romance";
})(MovieGenre || (MovieGenre = {}));
var movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    var newMovie = {
        movieId: movieId,
        title: title,
        genre: genre,
        availableSeats: availableSeats
    };
    movies.push(newMovie);
    return newMovie;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    var foundMovie = movies.find(function (movie) { return movie.movieId == movieId; });
    if (!foundMovie)
        return "Movie not found";
    foundMovie.availableSeats = foundMovie.availableSeats.filter(function (seat) { return !(seat[0] === rowLetter && seat[1] === seatNumber); });
    return "Seat ".concat(rowLetter).concat(seatNumber, " booked successfully");
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var foundMovie = movies.find(function (movie) { return movie.movieId == movieId; });
    if (!foundMovie)
        return false;
    var foundSeat = foundMovie.availableSeats.find(function (seat) { return seat[0] === rowLetter && seat[1] === seatNumber; });
    if (!foundSeat)
        return false;
    return true;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
