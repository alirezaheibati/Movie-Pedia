import MovieModel from "../models/MovieModel";
import topTenView from "../views/TopTenView";
import searchBoxView from "../views/SearchBoxView";
import searchTypeView from "../views/SearchTypeView";
import topTenSliderView from "../views/TopTenSliderViwe";
import searchTypeView from "../views/SearchTypeView";
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
   * Handles the search form submission by loading movie information.
   * @param {string} searchTerm - The search term entered by the user.
   */
  handleSearchFormSubmit(searchTerm) {
    this.movieModel.loadMoviInformation(searchTerm);
  }
  /**
   * Handles setting the movie search type.
   * @param {string} type - The type of search (movie or series).
   */
  handleMovieSearchType(type) {
    if (type !== this.movieModel.searchType)
      this.movieModel.setSearchType(type);
  }
}
