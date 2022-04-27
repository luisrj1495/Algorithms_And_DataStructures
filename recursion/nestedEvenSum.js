const nestedEvenSum = (obj) => {
  let sum = 0;

  const helper = (data) => {
    for (let value of Object.values(data)) {
      if (typeof value === "number" && value % 2 == 0) sum += value;
      if (typeof value === "object" && data !== null) helper(value);
    }
  };

  helper(obj);

  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
