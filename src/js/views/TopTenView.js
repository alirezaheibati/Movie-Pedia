import View from "./View";
/**
 * Represents the view for top ten movies section.
 * Extends the base View class to inherit common view properties and methods.
 */
class TopTenView extends View {
  slideNum = 0;
  /**
   * The parent element in the DOM where the top ten movies will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("slider-container");
  /**
   * Generates the markup for the highlights view.
   *
   * @returns {string} The HTML markup for the weather highlights.
   * @protected
   */
  _generateMarkup() {
    return this._data
      .map((movie) => {
        return `
            <div class="w-[9%] h-full flex justify-start items-end text-slate-50 relative rounded-xl bg-cover bg-no-repeat after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-xl  after:bg-gradient-to-t after:from-[#041023] after:to-transparent"
            style="background-image: url(${movie.Poster});">
                <div class="z-10 w-full p-4">
                    <button class="absolute right-4 top-4 text-3xl"><i class="fa-regular fa-heart text-[#ea2a49]"></i></button>
                    <h3 class="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">${movie.Title}</h3>
                    <p class="mb-1 text-slate-200">${movie.Genre}</p>
                    <div class="flex justify-start items-start gap-3">
                        <p class="text-amber-500">
                            <i class="fa-solid fa-star-half-stroke "></i> ${movie.imdbRating}
                        </p>
                        <p class="text-amber-500">
                            <i class="fa-solid fa-clock-rotate-left text-sm"></i> ${movie.Runtime}
                        </p>
                    </div>
                </div>
            </div>
        `;
      })
      .join();
  }
  /**
   * Slides to the specified portion of top ten movie container according to slide number.
   * @param {number} slideNum - The slide number to slide to.
   */
  slide(slideNum) {
    this._parentElement.classList.remove(
      `-translate-x-[${this.slideNum * 10}%]`
    );

    this.slideNum = slideNum;
    this._parentElement.classList.add(`-translate-x-[${10 * slideNum}%]`);
  }
  /**
   * Adds an event handler to the window resize event.
   * @param {Function} handle - The function to handle the window resize event.
   */
  addHandlerToSliderResize(handle) {
    window.addEventListener("resize", handle);
  }
}
const topTenView = new TopTenView();
export default topTenView;
