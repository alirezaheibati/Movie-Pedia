import View from "./View";
/**
 * Represents the view for the message section.
 * Extends the base View class to inherit common view properties and methods.
 */
class MessageView extends View {
  /**
   * The parent element in the DOM where the possible error messages will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("message-container");
  /**
   * Hides/Shows the message box by adjusting its CSS classes.
   * - Removes/Adds the 'flex' class from the parent element.
   * - Removes/Adds the 'hidden' class to the parent element.
   */
  toggleMessageBox() {
    this._parentElement.classList.toggle("flex");
    this._parentElement.classList.toggle("hidden");
  }
}
const messageView = new MessageView();
export default messageView;
