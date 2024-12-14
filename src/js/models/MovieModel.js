import topTenMovies from "../../data/top-ten-data";
import { getJSON } from "../helper.js";
import { API_KEY, API_URL } from "../config.js";
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
    this.searchType = "movie";
    this.searchResults = [];
    this.searchIds = [];
  }
  /**
   * Sets the search type.
   * @param {string} type - The search type ('t' for movie titles, 's' for TV series information).
   */
  setSearchType(type) {
    this.searchType = type;
  }
  /**
   * Loads ten movies/series IMDB Ids based on the search query and current search type.
   * @param {string} query - The search query.
   * @throws Will throw an error if the fetch operation fails.
   */
  async loadMoviInformation(query) {
    try {
      const data = await getJSON(
        `${API_URL}apikey=${API_KEY}&s=${query}&type=${this.searchType}`
      );
      if (data.Response === "False") {
        throw data;
      }
      this.searchIds = data.Search.map((item) => item.imdbID);
    } catch (err) {
      throw err;
    }
  }
}
