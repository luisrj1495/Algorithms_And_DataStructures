const binarySearch = (params: { isBadVersion: any; length: number }) => {
  let start = 0;
  let end = params.length;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (!params.isBadVersion(middle)) return middle;
    end = middle - 1;
  }

  return 1;
};

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let goodVersion = binarySearch({ isBadVersion, length: n });

    while (!isBadVersion(goodVersion)) {
      goodVersion++;
    }

    return goodVersion;
  };
};
