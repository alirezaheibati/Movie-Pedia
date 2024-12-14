import View from "./View";
/**
 * Represents the view for the movie overlay section.
 * Extends the base View class to inherit common view properties and methods.
 */
class OverlayMovieView extends View {
  /**
   * The parent element in the DOM where the possible error messages will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("overlay-content-container");
  /**
   * Hides/Shows the overlay box by toggleing CSS 'hidden' class.
   */
  toggleOverlay() {
    this._parentElement.parentElement.classList.toggle("hidden");
  }
}
const overlayMovieView = new OverlayMovieView();
export default overlayMovieView;
