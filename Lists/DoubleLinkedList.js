import Node from '../BaseNode/index.js';

class NodeDobuble extends Node {
  constructor(value, previous, next) {
    super(value, next);
    this.previous = previous;

  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  contains(value) {
    let currentNodeFromHead = this.head;
    let currentNodeFromTail = this.tail;
    while (currentNodeFromHead && currentNodeFromTail) {
      if (currentNodeFromHead.value === value || currentNodeFromTail.value === value) {
        return true;
      }
      if (currentNodeFromHead === currentNodeFromTail) {
        return false;
      }
      currentNodeFromHead = currentNodeFromHead.next;
      currentNodeFromTail = currentNodeFromTail.previous;
    }
    return false;
  }

  insertHead(value) {
    if (!this.head) {
      const node = new NodeDobuble(value, null, null);
      this.head = node;
      this.tail = node;
    } else {
      const node = new NodeDobuble(value, null, this.head);
      this.head.previous = node;
      this.head = node;
    }
  }

  insertTail(value) {
    if (!this.tail) {
      const node = new NodeDobuble(value, null, null);
      this.tail = node;
      this.head = node;
    } else {
      const node = new NodeDobuble(value, this.tail, null);
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    if (this.head) {
      if (!this.head.next) {
        this.tail = null; 
      }
      this.head = this.head.next;
    }
  }

  removeTail() {
    if (this.tail) {
      if (!this.tail.previous) {
        this.head = null; 
      }
      this.tail = this.tail.previous;
    }
  }
}

export default DoubleLinkedList;