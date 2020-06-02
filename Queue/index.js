class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class Queue {
  constructor() {
    this.top = null;
    this.front = null;
  }

  contains(value) {
    let found = false;
    const temporalQueue = new Queue();
    while (this.front) {
      const valueInTop = this.dequeue();
      temporalQueue.enqueue(valueInTop);
      if (value === valueInTop) {
        found = true;
        break;
      }
    }


    while(this.front){
      const valueInFront = this.dequeue();
      temporalQueue.enqueue(valueInFront) 
    }

    this.front = temporalQueue.front;
    this.top = temporalQueue.top;
   
    return found;
  }

  dequeue() {
    const node = this.front;
    if (this.front) {
      if (!this.front.next) {
        this.top = null;
      }
      this.front = this.front.next;
    }
    return node && node.value;
  }

  enqueue(value) {
    const node = new Node(value, null);
    if (this.top) {
      this.top.next = node;
    }
    this.top = node;
    if (!this.front) {
      this.front = node;
    }
  }
}

export default Queue;