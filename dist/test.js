var movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "12 Angry Monkeys",
    "Pulp Fiction",
    "The Lord of the Rings",
];
var foundMovies;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "The Lord of the Rings") {
        foundMovies = movie;
    }
}
var logMovie = function () {
    console.log(foundMovies);
};
logMovie();
