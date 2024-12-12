import topTenView from "../views/TopTenView";
import MovieModel from "../models/MovieModel";
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
  }
  /**
   * Renders the top ten movies using the model.
   */
  renderTopTenMovies() {
    topTenView.render(this.movieModel.topTen);
  }
}
