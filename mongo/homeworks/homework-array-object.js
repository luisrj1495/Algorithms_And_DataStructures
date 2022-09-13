/**
 * This homework is using the data call boxoffice-extends.json
 * 1. All movies with exactly two genres
 * 2. Find all movies which aired in 2018
 * 3. Find all movies which have ratings greater than 8 but lower than 10
 */

// 1
db.movies.find({ genre: { $size: 2 } }).pretty();

// 2
db.movies.find({ "meta.aired": 2018 }).pretty();

// 3
db.movies.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } }).pretty();
