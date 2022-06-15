const mergeSortedArrays = (nums1: number[], nums2: number[]) => {
  const merged: number[] = [];

  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < nums1.length && pointerB < nums2.length) {
    if (nums1[pointerA] < nums2[pointerB]) {
      merged.push(nums1[pointerA]);
      pointerA++;
    } else {
      merged.push(nums2[pointerB]);
      pointerB++;
    }
  }

  while (pointerA < nums1.length) {
    merged.push(nums1[pointerA]);
    pointerA++;
  }

  while (pointerB < nums2.length) {
    merged.push(nums2[pointerB]);
    pointerB++;
  }

  return merged;
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = mergeSortedArrays(nums1, nums2);

  const middle = Math.floor(merged.length / 2);

  if (merged.length % 2 !== 0) return merged[middle];

  return (Number(merged[middle - 1] || "0") + merged[middle]) / 2;
}
