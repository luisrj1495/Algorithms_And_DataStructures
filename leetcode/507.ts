function checkPerfectNumber(num: number): boolean {
 /**
  * - Create a variable call perfectNum: number
  * - Loop between 1 and num - 1
  * - if the current num is mod zero, sum it to perfectNum
  * - return if perfectNum is equal to num
  */

 let perfectNum = 0;
 const limit = Math.floor(num / 2)
   
 for (let i = 1; i <= limit; i++) {
   if (num % i === 0) perfectNum += i;
 }

 return perfectNum === num;
}
