/**
 * Represents the view for search box form.
 */
class SearchBoxView {
  /**
   * The parent element in the DOM where the search box is rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("search-box-form");
  /**
   * Adds an event handler to the search form button for expanding the search input,
   * and assign proper classes.
   */
  addHandlerToSearchFormBtn() {
    this._parentElement.addEventListener("click", (e) => {
      const searchActivatorBtn = e.target.closest("#movie-search-btn");
      if (!searchActivatorBtn) return;
      const searchInputContainer = this._parentElement.querySelector(
        "#search-box-container"
      );
      searchInputContainer.classList.remove("w-12");
      searchInputContainer.classList.add("w-full");
      //change the type of button inside of form from 'button' to 'submit'.
      setTimeout(() => {
        searchActivatorBtn.type = "submit";
      }, 10);
    });
  }
}
const searchBoxView = new SearchBoxView();
export default searchBoxView;
