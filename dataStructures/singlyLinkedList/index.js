class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  initialize(node) {
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = this.head;
      return true;
    }

    return false;
  }

  push(value) {
    const node = new Node(value);
    this.length++;

    const wasInitialized = this.initialize(node);

    if (wasInitialized) return this;

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;

    this.head = currentHead.next;

    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  get2(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return Boolean(this.unshift(value));
    if (index === this.length) return Boolean(this.push(value));

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = currentNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.length--;
    return nodeToDelete;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    /**
     * [100,201,250,350,99]
     * node
     * prev
     * next
     */

    return this;
  }

  traverse() {
    let current = this.head;

    while (current !== this.tail) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new SinglyLinkedList();

linkedList.push("HELLO");
linkedList.push("GOODBYE");
linkedList.push("!");
linkedList.push("<3");
linkedList.push(":)");

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);

console.log(linkedList);
