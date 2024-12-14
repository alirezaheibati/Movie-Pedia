import View from "./View";
/**
 * Represents the view for the movie overlay section.
 * Extends the base View class to inherit common view properties and methods.
 */
class OverlayMovieView extends View {
  /**
   * The parent element in the DOM where the possible error messages will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("overlay-content-container");
  /**
   * Hides/Shows the overlay box by toggleing CSS 'hidden' class.
   */
  toggleOverlay() {
    this._parentElement.parentElement.classList.toggle("hidden");
  }
  /**
   * Generates the HTML markup for the movie overlay box.
   *
   * @returns {string} - The generated HTML markup.
   */
  _generateMarkup() {
    return `
          <div class="overlay absolute w-full h-full left-0 top-0 z-30 bg-cover bg-no-repeat grayscale opacity-20"
          style="background-image: url('${this._data.Poster}');" ></div>
          <div class="content relative z-40 px-4 py-12 w-full h-screen flex flex-col md:flex-row gap-4 overflow-y-scroll"
          >
            <div class=" w-full">
              <img src="${this._data.Poster}" alt="${
      this._data.Title
    }" class="w-[280px] max-w-[90%] lg:w-[400px] h-auto block mx-auto rounded-2xl">
            </div>
            <div class="h-[500px] w-full text-[#AFAFAF] ">
              <h1 class="text-3xl text-slate-200">${this._data.Title}</h1>
              <ul class="genre flex justify-start gap-3  my-2">
      ${this._data.Genre.split(", ")
        .map((item) => `<li class="border rounded-3xl px-4 py-1">${item}</li>`)
        .join("")}
    
              </ul>
              <p class="">${this._data.Plot}</p>
              <div class="border rounded-3xl my-4 p-4">
                <p>Director: <span class="font-bold">${
                  this._data.Director
                }</span></p>
                <hr class="my-2">
                <p>Casting: <span class="font-bold">${
                  this._data.Actors
                }</span></p>
              </div>
              <div class="border rounded-3xl my-4 p-4 flex flex-col justify-start items-start">
                  <p>Country: <span class="font-bold">${
                    this._data.Country
                  }</span></p>
                  <p>Year: <span class="font-bold">${this._data.Year}</span></p>
                  <p>Time: <span class="font-bold">${
                    this._data.Runtime
                  }</span></p>
                  <p>BoxOffice: <span class="font-bold">${
                    this._data.BoxOffice
                  }</span></p>
                  <p>Metascore: <span class="font-bold">${
                    this._data.Metascore
                  }/100</span></p>
              </div>
              <div class="py-4 sm:flex sm:justify-between sm:items-center sm:gap-[1%] md:flex-wrap">
                <button class="w-full sm:w-[49%] md:w-full xl:w-[49%] mb-2 bg-[#FFC23C] rounded-3xl py-3 text-slate-800">
                  <a href="https://www.imdb.com/title/${
                    this._data.imdbID
                  }" target="_blank">IMDB: ${this._data.imdbRating} (${
      this._data.imdbVotes
    })</a>
                  <i class="fa-solid fa-link"></i>
                </button>
                <button class="w-full sm:w-[49%] md:w-full xl:w-[49%] relative bg-[#ED145B] rounded-3xl py-3 text-slate-800">
                  <p class="">Add To Favories <i class="fa-regular fa-heart"></i> </p>
                </button>
              </div>
            </div>
    
          </div>
            `;
  }
}
const overlayMovieView = new OverlayMovieView();
export default overlayMovieView;
