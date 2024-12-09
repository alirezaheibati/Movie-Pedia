/**
 * Creates a promise that rejects after a specified timeout period.
 * Useful for setting a timeout on fetch requests or other asynchronous operations.
 *
 * @param {number} second - The number of seconds to wait before rejecting the promise.
 * @returns {Promise<never>} - A promise that rejects with an error message after the specified time.
 */
const timeout = function (second) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, second * 1000);
  });
};
