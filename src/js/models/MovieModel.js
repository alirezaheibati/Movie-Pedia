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
     * 'movie' represents movie title search.
     * 'series' represents serial titile search
     */
    this.searchType = "movie";
    /**
     * @property {Array} searchResults - Stores the detailed information of movies fetched from the API.
     */
    this.searchResults = [];
    /**
     * @property {Array} searchIds - Stores the list of movie IDs retrieved from the initial search query.
     */
    this.searchIds = [];
    // Object to store data of the movie to be rendered in overlay
    this.ovelayedMovieInfo = {};
    // Array of user's favorite movies stored.
    this.favorites = [];
  }
  /**
   * Sets the search type.
   * @param {string} type - The search type ('t' for movie titles, 's' for TV series information).
   */
  setSearchType(type) {
    this.searchType = type;
  }
  /**
   * Fetches detailed information for a list of movies based on their IDs.
   * Sets the favorite property to 'true' if the movie is in the favorites list, otherwise 'false'.
   * Utilizes the OMDB API to retrieve movie data concurrently.
   *
   * @param {Array<string>} movieIds - An array of movie IDs to fetch information for.
   * @returns {Promise<void>} Updates the searchResults property with fetched movie data.
   * @throws Will throw the error if the fetch operation fails.
   */
  async fetchMovies(movieIds) {
    const fetchPromises = movieIds.map((id) =>
      getJSON(`${API_URL}apikey=${API_KEY}&i=${id}`)
    );
    try {
      const movies = await Promise.all(fetchPromises);
      this.searchResults = movies.map((movie) => {
        if (
          this.favorites.some((favorite) => favorite.imdbID === movie.imdbID)
        ) {
          return { ...movie, favorite: true };
        } else return { ...movie, favorite: false };
      });
    } catch (err) {
      throw err;
    }
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
  /**
   * Converts the favorites array to a JSON string before storing it to localStorage.
   */
  storageFavorites() {
    localStorage.setItem("favorite", JSON.stringify(this.favorites));
  }
  /**
   * Loads favorite movies from localStorage and updates the state.
   * Parses the JSON string retrieved from localStorage and sets this.favorites.
   */
  loadFavorites() {
    const storage = localStorage.getItem("favorite");
    if (storage) this.favorites = JSON.parse(storage);
  }
}
