/**
 * 1. Create new collection called sports
 * 2. Upsert two new documents with these fields: "title", "requiresTeam"
 * 3. Update all documents which do require a team by adding a new field
 * the minimum amount of players required
 * 4. Update all documents that require a team by increasing the number of
 * required player by 10
 */

db.sports.updateOne(
  { title: "Swimming" },
  { $set: { requiresTeam: true } },
  { upsert: true }
);

db.sports.updateOne(
  { title: "Tennis" },
  { $set: { requiresTeam: false } },
  { upsert: true }
);

db.sports.updateMany({ requiresTeam: true }, { $set: { minimumPlayers: 10 } });

db.sports.updateMany({ requiresTeam: true }, { $inc: { minimumPlayers: 10 } });
