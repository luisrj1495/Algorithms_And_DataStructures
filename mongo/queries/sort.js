/**
 * 1 means ascending
 * -1 means decreasing
 */
db.movies.find().sort({ "rating.average": 1 });

/**
 * You can multiple sort criteria
 */

db.movies.find().sort({ "rating.average": 1, runtime: -1 });
