const flatten = (arr) => {
  const flat = [];

  const helper = (arr) => {
    if (!arr.length) return;

    for (let v of arr) {
      if (typeof v === "number") {
        flat.push(v);
      } else if (Array.isArray(v)) {
        helper(v);
      }
    }
  };

  helper(arr);

  return flat;
};


function flatten(oldArr){
 var newArr = []
  for(var i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
       newArr = newArr.concat(flatten(oldArr[i]))
    } else {
       newArr.push(oldArr[i])
    }
 } 
 return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
