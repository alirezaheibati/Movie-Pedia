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
/**
 * Fetches JSON data from the provided URL.
 * Uses the Fetch API to make an asynchronous request.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} - A promise that resolves to the JSON data.
 * @throws {Error} - Throws an error if the request fails or if the response is not OK.
 */
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(7)]);
    const data = await res.json();
    if (!res.ok) throw new Error("Something went wrong");
    return data;
  } catch (err) {
    throw err;
  }
};
