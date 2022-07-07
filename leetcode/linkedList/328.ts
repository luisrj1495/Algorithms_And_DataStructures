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

function oddEvenList(head: ListNode | null): ListNode | null {
  /**
   * Loop the linked list
   * if val is even:
   *   - add it to the array evens
   *   - Remove the node
   * Loop evens and add them to the end of the linkedList
   */
  const evens: ListNode[] = [];
  const dummyList = new ListNode(undefined, head);
  let currentNode = head;
  let prev = dummyList;
  let index = 1;

  while (currentNode) {
    if (index % 2 === 0) {
      evens.push(currentNode);
      prev.next = currentNode.next;
    } else {
      prev = currentNode;
    }
    currentNode = currentNode.next;
    index++;
  }

  for (let node of evens) {
    node.next = null;
    prev.next = node;
    prev = prev.next;
  }

  console.log(dummyList.next);

  return dummyList.next;
}

