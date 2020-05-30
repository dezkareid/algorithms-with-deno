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
}

export default DoubleLinkedList;