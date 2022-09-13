/**
 * Find the age field exist
 */
db.movies.find({ age: { $exist: true, $gte: 30 } });

/**
 * Find the age field exist and not equal to null
 */

db.movies.find({ age: { $exist: true, $ne: null } });


/**
 * Finds phone if the type is a string
 * - You can check multiple type of data using the array
 */
db.movies.find({ phone: { $type: "string" } });
db.movies.find({ phone: { $type: ["string", "number"] } });

