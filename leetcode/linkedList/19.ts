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

const getLength = (head: ListNode | null): number => {
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    currentNode = currentNode.next;
    length++;
  }

  return length;
};

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  /**
   * - if the index = 0, replace the head
   * - otherwise:
   *   - get the node in the position index - 1;
   *   - create a variable call nodeToDelete where we'll save the currentNode.next
   *   - currentNode.next will be equal to nodeToDelete?.next
   * - return head
   */

  if (!head) return null;

  const length = getLength(head);
  const prevIndex = length - n;

  if (prevIndex === 0) {
    head = head.next;
    return head;
  }

  let currentNode = head;
  for (let i = 0; i < prevIndex - 1; i++) {
    currentNode = currentNode.next;
  }

  const nodeToDelete = currentNode.next;

  if (nodeToDelete) {
    currentNode.next = nodeToDelete.next;
  } else {
    currentNode.next = null;
  }

  return head;
}
