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
    /**
     * defines the type of search.
     * 't' represents movie title search.
     * 's' represents serial titile search
     */
    this.searchType = "t";
  }
}
