class NodeLinkedList {
  val;
  next;
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class MyLinkedList {
  head;
  tail;
  length;
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  print(...message) {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log("START DEBUG");
    console.log("Length", this.length);
    console.log("arr length", arr.length);
    console.log("length equal ", this.length == arr.length);
    console.log(arr);
    console.log({ message });
    console.log("END DEBUG");
  }

  getNode(index: number): any {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  get(index) {
    const node = this.getNode(index);

    return node ? node.val : -1;
  }

  addAtHead(val) {
    const newNode = new NodeLinkedList(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    this.print("addAtHead");
  }

  addAtTail(val) {
    const newNode = new NodeLinkedList(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.print("addAtTail", val);
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    const prevNode = this.getNode(index - 1);
    const newNode = new NodeLinkedList(val);
    const currentNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;

    this.print("addAtIndex");
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = current;

    while (current) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  shift() {
    if (!this.head) return;

    const nextHead = this.head.next;
    this.head = nextHead;
    this.length--;

    if (!this.length) {
      this.length = null;
      this.tail = null;
      this.length = 0;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.getNode(index - 1);
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.length--;
    this.print("delete");
  }
}

var linkedList = new MyLinkedList()

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * ["MyLinkedList","addAtHead","get","addAtIndex","addAtIndex","deleteAtIndex","addAtHead","addAtHead","deleteAtIndex","addAtIndex","addAtHead","deleteAtIndex"]
[[],[9],[1],[1,1],[1,7],[1],[7],[4],[1],[1,4],[2],[5]]
 */
