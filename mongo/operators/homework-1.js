/**
 * 1. Import movieStart.json
 * 2. Search all movies that have a rating higher than 9.2
 * and a runtime lower than 100 minutes
 * 3. Search all movies that have a genre of "drama" or "action"
 * 4. Search all movies where visitors exceeded expectedVisitors
 */

// 1.
db.movies
  .find({
    $and: [{ "meta.rating": { $gt: 9.2 } }, { "meta.runtime": { $lt: 100 } }],
  })
  .pretty();

db.movies.find({ "meta.rating": { $gt: 9.2 }, "meta.runtime": { $lt: 100 } });

// 2
db.movies.find({ $or: [{ genre: "drama" }, { genre: "action" }] }).pretty();
db.movies.find({ genre: { $in: ["drama", "action"] } }).pretty();

// 3
db.movies.find({ $expr: { $gt: ["$visitors", "$expectedVisitors"] } });
