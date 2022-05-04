function areOccurrencesEqual(s: string): boolean {
  const frequency = {};

  for (let current of s) {
    frequency[current] = (frequency[current] || 0) + 1;
  }

  const values = Object.values(frequency);
  for (let index = 0; index < values.length - 1; index++) {
    if (values[index] !== values[index + 1]) return false;
  }

  return true;
}

function areOccurrencesEqual2(s: string): boolean {
  const frequency = {};

  for (let current of s) {
    frequency[current] = (frequency[current] || 0) + 1;
  }

  return new Set(Object.values(frequency)).size === 1;
}

function areOccurrencesEqual3(s: string): boolean {
 let good = true;
 
 if(s.length === 1) {
     return good;
 }
 
 let charsCount = new Map();
 
 for(let i = 0; i < s.length; i++) {
     let char = s[i];
     
     if(charsCount.has(char)) {
         charsCount.set(char, charsCount.get(char) + 1);
     } else {
         charsCount.set(char, 1);
     }
 }
 
 let prevCount;
 
 for (let [, count] of charsCount) {
     if(!prevCount) {
         prevCount = count;
         continue;
     }
     
     if(count !== prevCount) {
         good = false;
         break;
     }
 }
 
 return good;
};