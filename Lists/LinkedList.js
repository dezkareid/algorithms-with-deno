import Node from '../BaseNode/index.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  insert(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  remove() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
}

export default LinkedList;
