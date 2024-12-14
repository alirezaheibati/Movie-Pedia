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
}
const messageView = new MessageView();
export default messageView;
