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

    // ===== viejo codigo =====
    //while (temporalQueue.front) {
    //  const valueInTop = temporalQueue.dequeue();
    //  this.enqueue(valueInTop);
    //}

    // ===== nuevo codigo =====
    // regresar Queue a la normalidad
    // remplazando la Queue vieja por temporalQueue
    if(found && this.front){
      while(this.front){
        const valueInFrontToPutInTop = this.dequeue();
        temporalQueue.enqueue(valueInFrontToPutInTop) 
      }
        
    }
    // tomar el front y el top de la temporalQueue
    // ya que se le hizo un dequeue por completo
    // a la Queue original.
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

/*

// mini test.

const myQ = new Queue();
myQ.enqueue(10)
myQ.enqueue(20)
myQ.enqueue(30)
myQ.enqueue(40)
console.log(myQ)

console.log(myQ.contains(20)) // true
console.log(myQ)

console.log(myQ.contains(50)) // false
console.log(myQ)
*/
