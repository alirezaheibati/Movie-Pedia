/**
 * Represents the view for search type selector container.
 */
class SearchTypeView {
  /**
   * The parent element in the DOM where the search type container is rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("search-type-container");
}
const searchTypeView = new SearchTypeView();
export default searchTypeView;
