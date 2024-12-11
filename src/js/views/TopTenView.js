import View from "./View";
/**
 * Represents the view for top ten movies section.
 * Extends the base View class to inherit common view properties and methods.
 */
class TopTenView extends View {
  /**
   * The parent element in the DOM where the top ten movies will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("slider-container");
}
