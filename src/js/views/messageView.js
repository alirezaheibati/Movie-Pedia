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
  /**
   * Generates the HTML markup for the message box.
   *
   * @returns {string} - The generated HTML markup.
   */
  _generateMarkup() {
    return `
        <div
          class="rounded-xl bg-slate-200 w-[400px] max-w-[95%] px-8 pb-4 pt-8  text-center"
          >
            <h2 class="text-3xl mb-2">${this._data.title}</h2>
            <p class="mb-4" >${this._data.message}</p>
            <button
              id="error-btn"
              class="error-close-btn bg-slate-800 text-slate-200 rounded-lg px-8 py-2"
              >
              OK
            </button>
        </div>
        `;
  }
  /**
   ** Adds an event handler to close the message box when the close button is clicked.
   ** - Listens for click events on the parent element.
   * - Checks if the clicked target has the class 'error-close-btn'.
   * - Calls the _hideMessageBox method to hide the message box.
   */
  addHandleToCloseMessageBox() {
    this._parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("error-close-btn")) {
        this.toggleMessageBox();
      }
    });
  }
}
const messageView = new MessageView();
export default messageView;
