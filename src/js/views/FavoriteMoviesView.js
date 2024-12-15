import View from "./View";
/**
 * Represents the view for favorite movies section.
 * Extends the base View class to inherit common view properties and methods.
 */
class FavoriteMoviesView extends View {
  /**
   * The parent element in the DOM where the favorite movies will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("favorite-movies-tab");
}
const favoriteMoviesView = new FavoriteMoviesView();
export default favoriteMoviesView;
