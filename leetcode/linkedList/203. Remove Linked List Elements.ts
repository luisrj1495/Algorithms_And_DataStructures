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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let newHead = null;
  let current = head;
  let currentNewHead: ListNode | null = null;

  while (current) {
    if (current.val !== val) {
      if (!newHead) {
        newHead = current;
        currentNewHead = newHead;
      } else {
        currentNewHead.next = current;
        currentNewHead = currentNewHead.next;
      }
    } else {
      if (currentNewHead) currentNewHead.next = null;
    }

    current = current.next;
  }

  return newHead;
}

function removeElements2(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}

function removeElements3(head: ListNode | null, val: number): ListNode | null {
  let dummyHead = new ListNode(undefined, head);
  let current = head;
  let prev = dummyHead;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return dummyHead.next;
}

/**
 * val = 7
 * 7 -> 7 -> 7
 * prev = null;
 * current = 7
 *
 *
 *
 */
