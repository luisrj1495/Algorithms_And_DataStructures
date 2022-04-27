const collectStrings = (obj) => {
  const newString = [];

  const helper = (data) => {
    for (let value of Object.values(data)) {
      if (typeof value === "string") newString.push(value);
      if (typeof value === "object" && value !== null) helper(value);
    }
  };

  helper(obj);

  return newString;
};

const collectStrings2 = (obj) => {
  let newString = [];

  for (let value of Object.values(obj)) {
    if (typeof value === "string") newString.push(value);
    if (typeof value === "object" && value !== null)
      newString.push(...collectStrings2(value));
    // Or
    // newString = newString.concat(collectStrings2(value));
  }

  return newString;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
