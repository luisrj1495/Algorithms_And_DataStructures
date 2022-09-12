db.patients.insertOne({ name: "asdas" }, { writeConcern: { w: 1, j: true } });

db.companies.insertOne({ _id: "amazon", name: "Amazon" });
db.companies.insertMany([{ name: "Facebook" }, { name: "Google" }]);

db.companies.insertMany(
  [{ name: "Calendly" }, { _id: "amazon", name: "Amazon" }, { name: "vendoo" }],
  { ordered: false }
);

db.companies.insertOne(
  { name: "Youtube" },
  { writeConcern: { w: 1, j: false } }
);

db.companies.insertOne(
  { name: "Youtube" },
  { writeConcern: { w: 1, j: true } }
);
