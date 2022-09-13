const data = {
  name: "Apple",
  isStartup: true,
  employees: 33,
  funding: 123456780123567890,
  details: { ceo: "luis", tags: ["super", "duper"] },
  foundingDate: new Date(),
  insertedAt: new Timestamp(),
};

const numbers = {
  a: 1, // it is saved like a float
  b: NumberInt(1) // It is like integer so, it ocupa less storage
};
