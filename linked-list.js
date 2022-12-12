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
    if (this.tail) {
      let current = this.head;

      while (current !== null) {
        if (current.next === this.tail && this.tail !== this.head) {
          let oldTail = this.tail;
          current.next = null;
          this.tail = current;
          this.length--;
          return oldTail.val;
        } else if (this.tail === this.head) {
          let oldTail = this.tail;
          this.head = null;
          this.tail = null;
          this.length--;
          return oldTail.val;
        }
        current = current.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head) { //one
      let removedEl = this.head;
      if (this.length === 1) {
        this.tail = null;
      }
      this.head = this.head.next;
      this.length--;
      return removedEl.val;
    }
  }



  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
