import MovieModel from "../models/MovieModel";
import topTenView from "../views/TopTenView";
import searchBoxView from "../views/SearchBoxView";
import searchTypeView from "../views/SearchTypeView";
import topTenSliderView from "../views/TopTenSliderViwe";
import searchTypeView from "../views/SearchTypeView";
import searchResultsView from "../views/SearchResultsView";
import messageView from "../views/messageView";
import overlayMovieView from "../views/OverlayMovieView";
import favoriteMoviesView from "../views/FavoriteMoviesView";
import tabsView from "../views/TabsView";
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
    this.movieModel.loadFavorites();
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
    topTenView.addHandlerShowTopTenOverlay(
      this.handleShowingTopTenOvarlayInfo.bind(this)
    );
    overlayMovieView.addHandlerToFavoriteBtn(
      this.handleOverlayFavoriteBtn.bind(this)
    );
    favoriteMoviesView.addHandlerShowFavoriteInfo(
      this.handleShowingFavoriteOvarlayInfo.bind(this)
    );
    tabsView.addHandlerTabsClick(this.handleTagToggle.bind(this));
  }
  /**
   * load topTen movies and adjust favorite property according to moveiModel.favorite array
   * then Renders the top ten movies.
   */
  renderTopTenMovies() {
    this.movieModel.loadTopTenMovies();
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
   * adds/removes clicked movie from favorites.
   *
   * @param {string} movieId - The ID of the movie to show in the overlay.
   * @param {string} action - identifier that specify add/remove movie from favorite or just show overlay information.
   */
  handleShowingMovieOvarlayInfo(movieId, action) {
    //find the index number of clicked movie box
    const indexNum = this.movieModel.searchResults.findIndex(
      (movie) => movie.imdbID === movieId
    );
    if (action === "favorite") {
      if (this.movieModel.searchResults[indexNum].favorite === true) {
        this.movieModel.searchResults[indexNum].favorite = false;
        this.movieModel.favorites = this.movieModel.favorites.filter(
          (movie) => movie.imdbID !== movieId
        );
      } else {
        this.movieModel.searchResults[indexNum].favorite = true;
        this.movieModel.favorites.push(this.movieModel.searchResults[indexNum]);
      }
      this.movieModel.storageFavorites();
      searchResultsView.render(this.movieModel.searchResults);
    } else {
      //copy clicked data object to movieModel.searchResults property
      this.movieModel.ovelayedMovieInfo = {
        ...this.movieModel.searchResults[indexNum],
      };
      overlayMovieView.toggleOverlay();
      overlayMovieView.render(this.movieModel.ovelayedMovieInfo);
    }
    console.log(this.movieModel.favorites);
  }
  /**
   * Handles showing the overlay with Top ten information
   * adds/removes clicked movie from favorites.
   *
   * @param {string} movieId - The ID of the movie to show in the overlay.
   * @param {string} action - identifier that specify add/remove movie from favorite or just show overlay information.
   */
  handleShowingTopTenOvarlayInfo(movieId, action) {
    //find the index number of clicked top ten movies
    const indexNum = this.movieModel.topTen.findIndex(
      (movie) => movie.imdbID === movieId
    );
    if (action === "favorite") {
      if (this.movieModel.topTen[indexNum].favorite === true) {
        this.movieModel.topTen[indexNum].favorite = false;
        this.movieModel.favorites = this.movieModel.favorites.filter(
          (movie) => movie.imdbID !== movieId
        );
      } else {
        this.movieModel.topTen[indexNum].favorite = true;
        this.movieModel.favorites.push(this.movieModel.topTen[indexNum]);
      }
      this.movieModel.storageFavorites();
      topTenView.render(this.movieModel.topTen);
      favoriteMoviesView.render(this.movieModel.favorites);
    } else {
      //copy clicked data object to movieModel.searchResults property
      this.movieModel.ovelayedMovieInfo = {
        ...this.movieModel.topTen[indexNum],
      };
      overlayMovieView.toggleOverlay();
      overlayMovieView.render(this.movieModel.ovelayedMovieInfo);
    }
    console.log(this.movieModel.favorites);
  }
  /**
   * Handles the favorite button click in the overlay to add/remove movie in overlay form favorites.
   */
  handleOverlayFavoriteBtn() {
    //get movie id rendering in overlay section
    const movieId = this.movieModel.ovelayedMovieInfo.imdbID;
    //revert favorite property in overlay
    this.movieModel.ovelayedMovieInfo.favorite =
      !this.movieModel.ovelayedMovieInfo.favorite;
    //if the movie is already in favorites array remove it otherwise add movie to favorites
    if (this.movieModel.favorites.some((movie) => movie.imdbID === movieId)) {
      this.movieModel.favorites = [
        ...this.movieModel.favorites.filter(
          (movie) => movie.imdbID !== movieId
        ),
      ];
    } else {
      this.movieModel.favorites.push(this.movieModel.ovelayedMovieInfo);
    }

    this.movieModel.storageFavorites();
    //modify favorite property of topTen and searchResults
    this.movieModel.topTen.forEach((movie) => {
      if (movie.imdbID === movieId) movie.favorite = !movie.favorite;
    });
    this.movieModel.searchResults.forEach((movie) => {
      if (movie.imdbID === movieId) movie.favorite = !movie.favorite;
    });
    overlayMovieView.render(this.movieModel.ovelayedMovieInfo);
    searchResultsView.render(this.movieModel.searchResults);
    favoriteMoviesView.render(this.movieModel.favorites);
    topTenView.render(this.movieModel.topTen);
  }
  /**
   * Handles showing the overlay with movie information.
   * adds/removes clicked movie from favorites.
   *
   * @param {string} movieId - The ID of the movie to show in the overlay.
   * @param {string} action - identifier that specify add/remove movie from favorite or just show overlay information.
   */
  handleShowingFavoriteOvarlayInfo(movieId, action) {
    //find the index number of clicked movie box
    const indexNum = this.movieModel.favorites.findIndex(
      (movie) => movie.imdbID === movieId
    );
    if (action === "favorite") {
      this.movieModel.favorites = this.movieModel.favorites.filter(
        (movie) => movie.imdbID !== movieId
      );

      this.movieModel.storageFavorites();
      favoriteMoviesView.render(this.movieModel.favorites);
    } else {
      //copy clicked data object to movieModel.searchResults property
      this.movieModel.ovelayedMovieInfo = {
        ...this.movieModel.favorites[indexNum],
      };
      overlayMovieView.toggleOverlay();
      overlayMovieView.render(this.movieModel.ovelayedMovieInfo);
    }
  }
  /**
   * Handles toggling between the favorite movies tab and the search results tab.
   * @param {string} identifier - The identifier to determine which tab to show.
   */
  handleTagToggle(identifier) {
    if (identifier === "favorite") {
      favoriteMoviesView.showFavoritesTab();
      searchResultsView.hideResultsTab();
      favoriteMoviesView.render(this.movieModel.favorites);
    } else {
      favoriteMoviesView.hideFavoritesTab();
      searchResultsView.showResultsTab();
    }
  }
}
