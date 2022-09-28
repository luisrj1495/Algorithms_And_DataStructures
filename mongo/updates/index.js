db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  // It will override the existing hobbies
  { $set: { hobbies: ["nothing"] } }
);

db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $set: { hobbies: [{ title: "Sports", acknowledged: true, frequency: 10 }] },
  }
);

db.persons.updateMany(
  { "hobbies.title": "Sports" },
  { $set: { sporty: true } }
);

db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    // Using $set we can update as many fields as we want
    $set: {
      age: 18,
      hobbies: [{ title: "Sports", acknowledged: true, frequency: 10 }],
    },
  }
);

/**
 * Increment
 */
db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    // Increment the age by 2
    $inc: {
      age: 2,
    },
  }
);

/**
 * Decrement by 2
 */
db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $inc: {
      age: -2,
    },
  }
);

/**
 * We can combine with set
 */

db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $inc: {
      age: -2,
    },
    $set: {
      lasName: "Ruiz",
    },
  }
);
