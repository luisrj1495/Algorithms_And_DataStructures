/**
 * Drop a field, remove the field age
 */
db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $unset: { age: "" },
  }
);

/**
 * Renaming fields
 */
db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $rename: { aged: "updatedAged" },
  }
);

/**
 * upsert means if the document does not exist, it will be created
 */
db.persons.updateOne(
  { name: "Maria" },
  {
    $set: { age: 29, hobbies: ["food"], phone: 1234 },
  },
  { upsert: true }
);
