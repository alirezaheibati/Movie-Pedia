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
}
const tabsView = new TabsView();
export default tabsView;
