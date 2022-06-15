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

function middleNode(head: ListNode | null): ListNode | null {
  /**
   * Find the length lopping the linked list
   * get the middle using Math.floor(length / 2)
   *   - replace the current to the head
   * return head
   */
  const length = getLength(head);
  const middle = Math.floor(length / 2);

  let currentNode = head;

  for (let i = 0; i < middle; i++) {
    currentNode = currentNode.next;
  }

  head = currentNode;

  return head;
}
