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
}
const tabsView = new TabsView();
export default tabsView;
