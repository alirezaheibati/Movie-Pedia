/**
 * Represents the view for tabs view.
 */
class TabsView {
  /**
   * The parent element in the DOM where the tabs are rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("tabs-container-ul");
  /**
   * Removes the specific style from all tab items.
   * This method removes the 'text-[#ea2a49]' class from all elements with the class 'tab-item'.
   */
  _removeTabsStyle() {
    this._parentElement.querySelectorAll(".tab-item").forEach((tab) => {
      tab.classList.remove("text-[#ea2a49]");
    });
  }
  /**
   * Adds an event handler for tab clicks.
   * When a tab item is clicked, the specific style is removed from all tab items,
   * the clicked tab item gets the specific style added, and the handler is called with the tab identifier.
   * @param {Function} handle - The function to handle tab clicks.
   */
  addHandlerTabsClick(handle) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-item");
      if (!btn) return;
      this._removeTabsStyle();
      btn.classList.add("text-[#ea2a49]");
      const identifier = btn.dataset.tabIdentifier;
      handle(identifier);
    });
  }
}
const tabsView = new TabsView();
export default tabsView;
