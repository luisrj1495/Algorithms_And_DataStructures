const normalize = (params: { a: string; b: string }) => {
  const diff = Math.abs(params.a.length - params.b.length);

  if (params.a.length === params.b.length) return params;
  if (params.a.length > params.b.length) {
    return { a: params.a, b: "0".repeat(diff) + params.b };
  }
  return { a: "0".repeat(diff) + params.a, b: params.b };
};

function addBinary(a: string, b: string): string {
  /**
   * - We need to make that both of string have the same length
   * - Loop the string starting at the end
   * - Sum the values with the accumulator
   * - concat to rta the sum mod 2
   * - subtract sum with 2 and if the value is >= 0 the accumulator will be 1
   *   - otherwise is zero
   * return rta
   */

  const values = normalize({ a, b });
  let accumulator = 0;
  let result = "";

  for (let i = values.a.length - 1; i >= 0; i--) {
    console.log(values.a[i], values.b[i]);
    const sum = +values.a[i] + +values.b[i] + accumulator;
    result = + sum % 2 + result;
    if (sum - 2 >= 0) accumulator = 1;
    else accumulator = 0;

    console.log({ result, sum });
  }

  if (accumulator) result = accumulator + result;

  console.log({ values });

  return result;
}


function addBinary2(a: string, b: string): string {
 let result = ''
 let sum = 0
 let curry = 0
 let i=a.length-1, j=b.length-1
 
 while(i>=0 || j>=0){
   sum = curry
   if(i>=0) sum+=Number(a[i--])
   if(j>=0) sum+=Number(b[j--])
   curry = sum > 1 ? 1:0
   
   result +=  (sum%2)
 }
 
 if(curry!==0) result += curry
 
 return result.split('').reverse().join('')
};

/**
 * 11 1
 * 11 01
 * 11
 * 01
 * 100   accumulator = 1
 *
 */
