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

db.persons.insertOne({hobbies: [{title: "su", frequency: 3}, {title: "asdsd", frequency: 5}, {title: "bbbb", frequency: 1}]})

/**
 * Only updates the first match for each document
 */
db.persons.updateMany({ "hobbies.frequency": { $gte: 2 } }, {$set: {"hobbies.$.good": true}});


/**
 * Update all elements in the array
 */
 db.persons.updateMany({ "hobbies.frequency": { $gte: 2 } }, {$set: {"hobbies.$[].good": true}});

