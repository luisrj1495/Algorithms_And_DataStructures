/**
 * @docs https://www.mongodb.com/docs/manual/reference/operator/query/
 */

/**
 * $ne = not equal
 */
db.movies.find({ runtime: { $ne: 60 } });

/**
 * $lt = lower than
 * $lte = lower than equal
 */
db.movies.find({ runtime: { $lt: 60 } });

/**
 * $in = Search in the property the values in the array that match with any of them
 * - Values accept it for the key
 * - It works like a or
 */
db.movies.find({ "network.country.name": { $in: ["United States"] } });
db.movies.find({ "network.name": { $in: ["The CW", "CBS"] } });

/**
 * $nin = Matches none of the values specified in an array.
 */

db.movies.find({ "network.name": { $nin: ["The CW", "CBS"] } });

/**
 * - Genres is an array
 * - db.movies.find({ genres: "Drama" });  -> Retrive all docs
 * with Drama as a property in the array
 *
 */
db.movies.find({ genres: "Drama" });
db.movies.find({ genres: ["Drama"] }); // Exact equality
