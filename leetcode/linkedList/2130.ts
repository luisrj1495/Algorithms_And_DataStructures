/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const getLength = (head: ListNode | null) => {
  let length = 0;

  let currentNode = head;

  while (currentNode) {
    currentNode = currentNode.next;
    length++;
  }

  return length;
};

function pairSum(head: ListNode | null): number {
  const length = getLength(head);
  const middle = Math.floor(length / 2);
  const values: number[] = [];
  let current = head;
  let max = -Infinity;

  for (let i = 0; i < length; i++) {
    if (i < middle) values.push(current.val);
    else {
      const lastValue = values.pop();
      const twin = lastValue + current.val;

      if (twin > max) max = twin;
    }
    current = current.next;
  }

  return max;
}

/**
 * let max = -Infinity
 * [5,4,2,1,10,6]
 * [5,4,2]
 * pop = 2 + 1 = 3
 * max = 3
 * [5,4]
 * pop = 4 + 10
 * max = 14
 * [5]
 * pop = 5 + 6
 * max = 14
 * return max
 */

//0 <= i <= 2
// 6 - 1 - 0 = 5
// 6 - 1 - 1 = 4
// 6 - 1 - 2 = 3
