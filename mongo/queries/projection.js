/**
 * The documents only contain the field with one
 */

db.movies
  .find(
    {},
    { name: 1, genres: 1, runtime: 1, rating: 1, _id: 0, "schedule.time": 1 }
  )
  .pretty();

/**
 * Projection on arrays
 * - "genres.$": 1 first match
 */
db.movies.find({ genres: "Drama" }, { "genres.$": 1 }).pretty();

db.movies
  .find({ genres: "Drama" }, { genres: { $elemMatch: { $eq: "Horror" } } })
  .pretty();

/**
 * - $slice:
 *   - only works for arrays
 *   - Cut the array by the number we want, in the example below
 *     takes the first two elements
 *   - It may be an array [index to start, amount of data to limit]
 */
db.movies
  .find({ "rating.average": { $gt: 9 } }, { genres: { $slice: 2 }, name: 1 })
  .pretty();

db.movies
  .find(
    { "rating.average": { $gt: 9 } },
    { genres: { $slice: [1, 2] }, name: 1 }
  )
  .pretty();
