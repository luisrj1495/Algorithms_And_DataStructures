/**
 *
 * @param {number} num
 */

const countdown = (num) => {
  if (num < 0) {
    console.log("Finish");
    return;
  }

  console.log(num)

  return countdown(--num)
};


