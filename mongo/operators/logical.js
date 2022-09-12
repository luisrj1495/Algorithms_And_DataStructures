/**
 * Or operator
 * - Find docs where it match with something in the array
 */
db.movies.find({
  $or: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 9.3 } }],
});

/**
 * nor operator
 * - Significa devolverme todos los documentos donde no se cumple
 * ninguna de las dos condiciones
 */
db.movies.find({
  $nor: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 9.3 } }],
});

/**
 * $and
 */

db.movies.find({
  $and: [{ "rating.average": { $gt: 9 } }, { genres: "Drama" }],
});

/**
 * They both are the same
 */

db.movies.find({
  "rating.average": { $gt: 9 },
  genres: "Drama",
});

/**
 * Both queries are the same
 */

db.movies.find({ runtime: { $not: { $eq: 60 } } });
db.movies.find({ runtime: { $$ne: 60 } });
