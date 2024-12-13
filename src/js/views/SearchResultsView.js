import View from "./View";
/**
 * Represents the view for search results section.
 * Extends the base View class to inherit common view properties and methods.
 */
class SearchResultsView extends View {
  /**
   * The parent element in the DOM where the search results will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("search-results-tab");
}
const searchResultsView = new SearchResultsView();
export default searchResultsView;
