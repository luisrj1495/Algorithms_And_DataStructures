function capitalizeWords(arr) {
  if (!arr.length) return [];

  const word = [arr[0].toUpperCase()];

  return word.concat(capitalizeWords(arr.slice(1)));
}

 let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
