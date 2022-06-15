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

const getValues = (params: {
  head: ListNode | null;
  pointA: number;
  pointB: number;
  length: number;
}) => {
  let valueA: number;
  let valueB: number;
  let currentNode = params.head;
  for (let i = 0; i < params.length; i++) {
    if (i === params.pointA) {
      valueA = currentNode.val;
    } else if (i === params.pointB) {
      valueB = currentNode.val;
    }
    currentNode = currentNode.next;
  }

  return { valueA, valueB };
};

const setValue = (params: {
  head: ListNode | null;
  index: number;
  value: number;
}) => {
  let currentNode = params.head;

  for (let i = 0; i < params.index; i++) {
    currentNode = currentNode.next;
  }

  currentNode.val = params.value;
};

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  /**
   * - get the length
   * - pointA = k -1; pointB = length - k - 1
   * - Loop the list to get the values
   * - Loop again to set the value
   */

  const length = getLength(head);
  let pointA = k - 1;
  let pointB = length - k;

  if (length === 1) return head;
  if (k === length) {
    pointA = 0;
    pointB = length - 1;
  }

  const { valueA, valueB } = getValues({ head, length, pointA, pointB });

  setValue({ head, value: valueB, index: pointA });
  setValue({ head, value: valueA, index: pointB });

  return head;
}

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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  var dup = new ListNode(0, head);
  var first = dup;
  var left = dup;

  for (var i = 0; i < k; i++) left = left.next;
  var second = left;

  while (second) {
    first = first.next;
    second = second.next;
  }

  if (!left) return head;

  var left_val = left.val;
  left.val = first.val;
  first.val = left_val;

  return dup.next;
}
