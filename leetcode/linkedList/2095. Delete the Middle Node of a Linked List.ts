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

function deleteMiddle(head: ListNode | null): ListNode | null {
  /**
   * Get the length of the linked list
   * get the middle index using Math.floor(length / 2)
   * Loop through the linked list until the middle index - 1
   * delete the node
   */

  const getMiddleIndex = () => {
    let current = head;
    let length = 0;
    while (current) {
      current = current.next;
      length++;
    }

    return Math.floor(length / 2);
  };

  const deleteNode = (index: number) => {
    let prev = head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    if (!prev) return;
    const nodeToDelete = prev.next;
    if (nodeToDelete) prev.next = nodeToDelete.next;
    else head = null

  };

  const middleIndexNode = getMiddleIndex();

  deleteNode(middleIndexNode);

  return head;
}
