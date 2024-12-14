import MovieModel from "../models/MovieModel";
import topTenView from "../views/TopTenView";
import searchBoxView from "../views/SearchBoxView";
import searchTypeView from "../views/SearchTypeView";
import topTenSliderView from "../views/TopTenSliderViwe";
import searchTypeView from "../views/SearchTypeView";
import searchResultsView from "../views/SearchResultsView";
import messageView from "../views/messageView";
import overlayMovieView from "../views/OverlayMovieView";
/**
 * MovieController class that manages the interaction between the model and views.
 * It handles user interactions, fetches movie data, and updates the views accordingly.
 */
export class MovieController {
  /**
   * Constructor for the MovieController class.
   * Initializes the model, and sets up event handlers for user interactions.
   */
  constructor() {
    this.movieModel = new MovieModel();
    this.renderTopTenMovies();
    this.setupEventHandlers();
  }
  /**
   * Sets up event handlers for user interactions.
   */
  setupEventHandlers() {
    topTenSliderView.addHandlerToSlideButtons(this.handleSlideTopTen);
    topTenView.addHandlerToSliderResize(this.handleTopTenSlideReset);
    searchBoxView.addHandlerToSearchFormBtn();
    searchBoxView.addHandlerToSearchFormSubmit(
      this.handleSearchFormSubmit.bind(this)
    );
    searchTypeView.addHandlerSearchTypeSelector(
      this.handleMovieSearchType.bind(this)
    );
    messageView.addHandleToCloseMessageBox();
    searchResultsView.addHandlerShowFullInfo(
      this.handleShowingMovieOvarlayInfo.bind(this)
    );
    overlayMovieView.addHandleToCloseMovieOverlay();
  }
  /**
   * Renders the top ten movies using the model.
   */
  renderTopTenMovies() {
    topTenView.render(this.movieModel.topTen);
  }
  /**
   * Handles sliding to the specified top ten movie slide.
   * @param {number} slideNum - The slide number to slide to.
   */
  handleSlideTopTen(slideNum) {
    topTenView.slide(slideNum);
  }
  /**
   * Handles the reset of the top ten slider on screen resize.
   */
  handleTopTenSlideReset() {
    topTenSliderView.resetActiveSliderOnScreenResize();
    topTenView.slide(0);
  }
  /**
   * Handles the search form submission, fetches movie information, and updates the view.
   *
   * @param {string} searchTerm - The search term entered by the user.
   * @returns {Promise<void>} Updates the search results view with the fetched movie data.
   */
  async handleSearchFormSubmit(searchTerm) {
    try {
      searchResultsView.toggleSpinner();
      await this.movieModel.loadMoviInformation(searchTerm);
      await this.movieModel.fetchMovies(this.movieModel.searchIds);
      searchResultsView.render(this.movieModel.searchResults);
      searchResultsView.toggleSpinner();
      searchResultsView.scrollToResults();
    } catch (err) {
      searchResultsView.toggleSpinner();
      messageView.toggleMessageBox();
      messageView.render({
        title: err.Error,
        message: "Double check search term and try again.",
      });
    }
  }
  /**
   * Handles setting the movie search type.
   * @param {string} type - The type of search (movie or series).
   */
  handleMovieSearchType(type) {
    if (type !== this.movieModel.searchType)
      this.movieModel.setSearchType(type);
  }
  /**
   * Handles showing the overlay with movie information.
   * @param {string} movieId - The ID of the movie to show in the overlay.
   */
  handleShowingMovieOvarlayInfo(movieId) {
    //find the index number of clicked movie box
    const indexNum = this.movieModel.searchResults.findIndex(
      (movie) => movie.imdbID === movieId
    );
    //copy clicked data object to movieModel.searchResults property
    this.movieModel.ovelayedMovieInfo = {
      ...this.movieModel.searchResults[indexNum],
    };
    overlayMovieView.toggleOverlay();
    overlayMovieView.render(this.movieModel.ovelayedMovieInfo);
  }
}
