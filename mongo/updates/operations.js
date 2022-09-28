/**
 * Update the document if the age to 35  as min value
 * it only change if the new value is lower than the existing value
 */
db.persons.updateOne(
  { _id: ObjectId("631a8fe4f525231f20091fe3") },
  {
    $min: { age: 35 },
  }
);

db.persons.updateOne(
 { _id: ObjectId("631a8fe4f525231f20091fe3") },
 {
   $max: { age: 32 },
 }
);

/**
 * It multiply the current age by 1.1
 */
db.persons.updateOne(
 { _id: ObjectId("631a8fe4f525231f20091fe3") },
 {
   $mul: { age: 1.1 },
 }
);

