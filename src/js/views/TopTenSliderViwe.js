/**
 * Represents the view for top ten movies slider buttons.
 */
class TopTenSliderView {
  /**
   * The parent element in the DOM where the top ten movies slider buttons are rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("top-ten-slider");
  /**
   * Reset active slider button width and background color to initial value.
   */
  _removeActiveClass() {
    this._parentElement.querySelectorAll(".slider-btn").forEach((btn) => {
      if (btn.classList.contains("w-6")) {
        btn.classList.remove("w-6");
        btn.classList.add("w-3");
        btn.classList.remove("bg-[#ea2a49]");
        btn.classList.add("bg-slate-300");
      }
    });
  }
}
const topTenSliderView = new TopTenSliderView();
export default topTenSliderView;
