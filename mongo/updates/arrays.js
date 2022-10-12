db.persons.find({
  "hobbies.title": "Sports",
  "hobbies.frequency": { $gte: 3 },
});

db.persons.find({
  hobbies: {
    $elemMatch: { title: "Sports", frequency: { $gte: 3 } },
  },
});

/**
 * - Update the object in the array that match with the find
 * - It updates the object in the array adding a new property
 * called highFrequency with the value true
 */
db.persons.updateMany(
  {
    hobbies: {
      $elemMatch: { title: "Sports", frequency: { $gte: 3 } },
    },
  },
  {
    $set: {
      "hobbies.$.highFrequency": true,
    },
  }
);

db.persons.insertOne({
  hobbies: [
    { title: "su", frequency: 3 },
    { title: "asdsd", frequency: 5 },
    { title: "bbbb", frequency: 1 },
  ],
});

/**
 * Only updates the first match for each document
 */
db.persons.updateMany(
  { "hobbies.frequency": { $gte: 2 } },
  { $set: { "hobbies.$.good": true } }
);

/**
 * Update all elements in the array
 */
db.persons.updateMany(
  { "hobbies.frequency": { $gte: 2 } },
  { $set: { "hobbies.$[].good": true } }
);

/**
 * Update only the object that has a frequency gte 2
 * el is a custom identifier to specify the condition in the object in the array
 */

db.persons.updateMany(
  { "hobbies.frequency": { $gte: 2 } },
  { $set: { "hobbies.$[el].donetor": true } },
  { arrayFilters: [{ "el.frequency": { $gt: 2 } }] }
);

/**
 * Add elements in the array
 */

db.persons.updateMany(
  {},
  { $push: { hobbies: { title: "NEw push", frequency: 2 } } }
);

/**
 * Only unique values add
 */
db.persons.updateMany(
 {},
 { $addToSet: { hobbies: { title: "NEw push", frequency: 2 } } }
);

// Push multiple objects
db.persons.updateMany(
  {},
  {
    $push: {
      hobbies: {
        $each: [
          { title: "susana oria", frequency: 1 },
          { title: "Donchi", frequency: 1 },
        ],
        // Sort the elements in the array all the elements
        $sort: { frequency: -1 },
      },
    },
  }
);

/**
 * Remove elements in the array
 */

db.persons.updateMany({}, { $pull: { hobbies: { title: "Donchi" } } });

/**
 * Remove the last element in the array
 * - Remove the first element -1
 * - Remove the last element 1
 */

db.persons.updateMany({}, { $pop: { hobbies: -1 } });
