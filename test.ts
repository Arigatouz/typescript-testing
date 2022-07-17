let movies: string[] = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "12 Angry Monkeys",
  "Pulp Fiction",
  "The Lord of the Rings",
];

let foundMovies: string;

for (let movie of movies) {
  if (movie === "The Lord of the Rings") {
    foundMovies = movie;
  }
}

const logMovie = (): void => {
  console.log(foundMovies);
};

logMovie();
