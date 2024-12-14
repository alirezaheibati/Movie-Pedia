import View from "./View";
/**
 * Represents the view for search results section.
 * Extends the base View class to inherit common view properties and methods.
 */
class SearchResultsView extends View {
  /**
   * The parent element in the DOM where the search results will be rendered.
   * @type {HTMLElement}
   * @protected
   */
  _parentElement = document.getElementById("search-results-tab");
  /**
   * Generates the markup for the each search results item.
   *
   * @returns {string} The HTML markup for the search results item.
   * @protected
   */
  _generateMarkup() {
    return this._data
      .map((movie) => {
        return `
       <div class="bg-[#23252B] cursor-pointer hover:opacity-80 p-4 rounded-lg lg:w-[49.5%] mb-4 search-item-box" data-imdb-id="${
         movie.imdbID
       }">
        <div class="img-container w-full h-[300px]">
          <img src="${
            movie.Poster
          }" alt="film poster" class="rounded-lg h-[300px] w-full object-cover object-top">
        </div>
        <div class="movie title flex justify-between items-center pt-3">
          <h3 class="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">${
            movie.Title
          }</h3>
          <button class="text-2xl"><i class="fa-regular fa-heart text-[#ea2a49]"></i></button>
        </div>
        <ul class="flex justify-start items-center p-1 mt-3 rounded-l-lg gap-2 text-[#AFAFAF] bg-gradient-to-r from-[#1C1C22] to-transparent ">
          <li title="Runtime"><i class="fa-solid fa-clock-rotate-left text-sm"></i> ${
            movie.Runtime === "N/A" ? "Unknown" : movie.Runtime
          }</li>
          <li title="Released"><i class="fa-regular fa-calendar-check "></i> ${
            movie.Year === "N/A" ? "Unknown" : movie.Year
          }</li>
          <li title="imdbVotes"><i class="fa-solid fa-star-half-stroke "></i> ${
            movie.imdbRating === "N/A" ? "Unknown" : movie.imdbRating
          } (${movie.imdbVotes === "N/A" ? "Unknown" : movie.imdbVotes})</li>
        </ul>
        <p class="text-[#AFAFAF] mt-2 text-justify">${movie.Plot}</p>
        <hr class="border-slate-500 my-2">
        <ul class="text-[#AFAFAF] ">
          <li title="Director"><i class="fa-solid fa-user-tie"></i><span class="font-bold"> Director: </span> ${
            movie.Director === "N/A" ? "Unknown" : movie.Director
          }</li>
          <li title="run time" class="mt-1 whitespace-nowrap overflow-hidden text-ellipsis"><i class="fa-solid fa-user-group "></i><span class="font-bold"> Actors: </span> ${
            movie.Actors === "N/A" ? "Unknown" : movie.Actors
          }</li>
        </ul>
       </div>
            `;
      })
      .join("");
  }
  /**
   * Scrolls the search results into view smoothly.
   */
  scrollToResults() {
    this._parentElement.scrollIntoView({ behavior: "smooth" });
  }
  /**
   * Adds an event handler to show full information of a search item.
   * @param {Function} handle - The function to handle showing full information.
   */
  addHandlerShowFullInfo(handle) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".search-item-box");
      if (!btn) return;
      const movieId = btn.dataset.imdbId;
      handle(movieId);
    });
  }
}
const searchResultsView = new SearchResultsView();
export default searchResultsView;
