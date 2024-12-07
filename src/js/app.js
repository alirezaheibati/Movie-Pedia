/**
 * Main entry point for the application.
 * Imports and initializes the MovieController when the DOM content is loaded.
 */
import { MovieController } from "./controllers/MovieController";
document.addEventListener("DOMContentLoaded", () => {
  const movieController = new MovieController();
});
