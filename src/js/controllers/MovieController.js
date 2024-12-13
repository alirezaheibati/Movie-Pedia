import MovieModel from "../models/MovieModel";
import topTenView from "../views/TopTenView";
import topTenSliderView from "../views/TopTenSliderViwe";
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
}
