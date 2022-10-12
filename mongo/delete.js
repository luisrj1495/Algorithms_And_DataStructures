db.users.deleteOne({ name: "Luis" });
db.users.deleteMany({ age: { $gt: 30 }, isSporty: true });

// Delete all entities in a collection
db.users.deleteMany({});
db.users.drop(); // This does not work with a orm

// Delete entire database
db.dropDatabase();
