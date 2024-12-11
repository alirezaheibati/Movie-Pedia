/**
 * Represents the base view class.
 * This class serves as a parent class for other view classes to extend from.
 */
export default class View {
  /**
   * Holds data for the view.
   * @type {*}
   * @protected
   */
  _data;
  /**
   * Renders the view with the provided data.
   * Updates the inner HTML of the parent element with the generated markup.
   *
   * @param {*} data - The data to be rendered in the view.
   */
  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
