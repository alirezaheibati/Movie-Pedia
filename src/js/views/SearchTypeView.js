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
  /**
   * Adds an event handler to the search type selector buttons.
   * add and removes proper classes to show the the active selection.
   * @param {Function} handle - The function to handle the search type selection.
   */
  addHandlerSearchTypeSelector(handle) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".type-toggler-btn");
      if (!btn) return;
      const togglerBtns =
        this._parentElement.querySelectorAll(".type-toggler-btn");
      togglerBtns.forEach((toggler) =>
        toggler.classList.remove("text-[#ea2a49]")
      );
      btn.classList.add("text-[#ea2a49]");
      if (btn.classList.contains("movie-toggler")) {
        handle("movie");
      } else {
        handle("series");
      }
    });
  }
}
const searchTypeView = new SearchTypeView();
export default searchTypeView;
