const data = [{ name: "Luis", hobbies: ["Jump", "Sports"] }];

/**
 * Find all users that have 3 hobbies,
 * it does not matter if is is an array of objects or string , numbers ...
 * - The value on the $size should be an exact number
 */
db.users.find({ hobbies: { $size: 3 } });

/**
 * Search genre for the values in the arrays exist
 * and it does not care about the order
 */
db.movies.find({ genre: { $all: ["thriller", "action"] } }).pretty();


/**
 * This seach for document that have a hobbies Sport and frequency
 * but not in the same element in the array
 */
db.users
  .find({
    $and: [{ "hobbies.title": "Sports" }, { "hobbies.frequency": { gte: 2 } }],
  })
  .pretty();


  /**
   * This is most accurate, because hobbies is an array of objects,
   * so, this query match for documents with title:"Sports" and frequency: >= 2
   */
db.users.find({
  hobbies: { $elemMatch: { title: "Sports", frequency: { gte: 2 } } },
});
