function power(num, pow) {
  if (pow === 0) return 1;
  const helper = (n, p) => {
    if (p <= 1) return n;

    p--;

    return helper(n * num, p);
  };

  return helper(num, pow);
}

function power2(num, pow) {
  let value = num;

  const helper = (p) => {
    if (p <= 1) return;

    value *= num;
    p--;

    helper(p);
  };

  helper(pow);

  return value;
}

const power3 = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * power3(base, --exponent);
};
