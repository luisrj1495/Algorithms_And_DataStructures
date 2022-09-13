/**
 * The order of cursor functions such as skip, limit, sort ...
 * does not matter because mongo can execute them in the right
 * order behind scenes
 */

db.movies.find().sort({ "rating.average": 1 }).skip(10).limit(20);
