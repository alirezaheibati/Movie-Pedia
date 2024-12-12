import topTenMovies from "../../data/top-ten-data";
/**
 * Represents the information model for movies.
 */
export default class MovieModel {
  constructor() {
    /**
     * Stores top ten Movies of all time information.
     */
    this.topTen = topTenMovies;
  }
}
