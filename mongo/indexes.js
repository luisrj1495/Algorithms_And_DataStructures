/**
 * Speed up the queries
 * - USING THE DATA FROM data/persons.json
 * - Why indexes?
 *   - No index: Map the entire collection to match with the query
 *   - Index: - Its a ordered list of all values that are saved in the key provided
 *            - When you create an index you pay performance when insert, because it needs
 *              to index to respective fields
 *            - You can think of the index as a simple list of values + pointers to the original document.
 *            - If you use indexes to filter things that matches with several things o the majority of your document it will perform worse
 *             it will be slower because you need to the index collection and the to the collection to get the info
 */

/**
 * Shows how mongo execute the query
 * - WinningPlan:
 *   - What it does to get the results
 *   - collscan: means loop the entire db
 */
db.contacts.explain().find({ "dob.age": { $gt: 60 } });

/**
 * Details of the query
 * - 5000 docs in 17ms without index
 * - 5000 docs in 0ms with index
 */
db.contacts.explain("executionStats").find({ "dob.age": { $gt: 60 } });

/**
 * Create an index
 * - 1 Ascending = Lower values come first
 * - -1 Descending = Greater values come first
 * - Mongo makes a binary search because they have the indexes sorted
 *
 */

db.contacts.createIndex({ "dob.age": 1 });

/**
 * Delete index
 */

db.contacts.dropIndex({ "dob.age": 1 });

/**
 * Compound indexes
 * - It creates one index where the value is two combined values
 * - The compound index can be used form most left to right, it means,
 * it can search for some compound properties individually
 * Example:
 *  32_male - how mongo save the index
 */

db.contacts.createIndex({ "dob.age": 1, gender: 1 });

db.contacts.explain("executionStats").find({ "dob.age": 35, gender: "male" });
db.contacts.explain("executionStats").find({ "dob.age": 35 });

/**
 * Sorting
 * - Mongo loads 32 Mb in memory when sorts
 * - If you use a index to sort something it could improve this process
 */

/**
 * Show all the indexes in a collection
 */
db.contacts.getIndexes();

/**
 * Unique property can help us to avoid duplicate data
 */
db.contacts.createIndex({ email: 1 }, { unique: true });

/**
 * - Create a age index where gender is male
 * - It is useful to create filter indexes
 */
db.contacts.createIndex(
  { "dob.age": 1 },
  { partialFilterExpression: { gender: "male" } }
);
