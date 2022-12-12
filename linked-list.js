/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return undefined;

    let current = this.head;

    while (current !== null) {
      let poppedVal = this.tail.val;
      if (current.next === this.tail) {
        current.next = null;
        this.tail = current;
      } else if (this.length === 1) {
        this.tail = null;
        this.head = null;
      }
      this.length--;
      return poppedVal;
    }
    current = current.next;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head) {
      let shiftedVal = this.head.val;
      if (this.length === 1) {
        this.tail = null;
      }
      this.head = this.head.next;
      this.length--;
      return shiftedVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0) {
      throw new Error("idx does not exist");
    }
    let currIdx = 0;
    let current = this.head;
    while (currIdx !== idx) {
      currIdx++;
      current = current.next;
      if (current === null) {
        throw new Error("idx does not exist");
      }
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
