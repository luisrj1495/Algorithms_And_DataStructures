const data = [
  { hobbies: [{ title: "Yoga", frequency: 2 }] },
  { hobbies: [{ title: "Sports", frequency: 4 }] },
];

db.users.find({ "hobbies.title": "Yoga" });
