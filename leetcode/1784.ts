function checkOnesSegment(s: string): boolean {
  /**
   * - create a flag called hasOnes equal to false
   * Loop the string:
   *  if flag is true and the value
   *
   */

  const visited = new Set();

  for (let current of s) {
    visited.add(current);

    if (current == "1" && visited.has("0") && visited.has("1")) return false
  }

  return true;
}


function checkOnesSegment2(s: string): boolean {
    
 let c = 0;
 let hasCont = false;
 
 for (let i=0; i < s.length; i++) {
     
     if (s[i] === '1') {
         c++;
         if (hasCont) {
             return false;
         } // this 1 comes after we already had a 1(s) then a 0 break
     } else {
         if (c > 0) {
             hasCont = true;
         }
     }
     
 } 
 return c > 0;
}


("1001");
("110");
("100");
("10011");
