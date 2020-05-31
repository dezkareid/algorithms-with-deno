import Node from '../BaseNode/index.js';

class Stack {
  constructor() {
    this.top = null;
  }

  contains(value) {
    let found = false;
    const temporalStack = new Stack();
    while (this.top) {
      const valueInTop = this.pop();
      temporalStack.push(valueInTop);
      if (value === valueInTop) {
        found = true;
        break;
      }
    }

    while (temporalStack.top) {
      const valueInTop = temporalStack.pop();
      this.push(valueInTop);
    }
    return found;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    if (this.top) {
      this.top = this.top.next;
    }
    return node && node.value;
  }
}

export default Stack;