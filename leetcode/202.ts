function isHappy(n) {
  let num = n.toString();
  const record = new Set();

  while (true) {
    let total = 0;
    for (let digit of num.split("")) {
      total += Math.pow(+digit, 2);
    }

    if (record.has(total)) return false;

    record.add(total);

    console.log({ num });
    debugger;

    if (total === 1) return true;
    num = total.toString();
  }
}
