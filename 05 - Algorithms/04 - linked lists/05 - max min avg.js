class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  // a method for adding nodes to the front of our list
  addFront(value) {
    // creating new node
    const newNode = new Node(value);
    // forming connectino from newNode to current head node
    newNode.next = this.head;
    // reassigning this Singly Linked List's head to newNode
    this.head = newNode;

    // returning this, allowing for chaining methods
    return this;
  }

  average() {
    if(!this.head) return null;

    let count = 0, sum = 0;
    let currentNode = this.head;
    while(currentNode) {
      sum += currentNode.value;
      count++;
      currentNode = currentNode.next;
    }
    return sum/count;
  }

  min() {
    if(!this.head) return null;
    
    let currentNode = this.head;
    let max = currentNode.value;
    while(currentNode) {
      if(currentNode.value < max) max = currentNode.value;
      currentNode = currentNode.next;
    }
    return max;
  }

  max() {
    if(!this.head) return null;
    
    let currentNode = this.head;
    let max = currentNode.value;
    while(currentNode) {
      if(currentNode.value > max) max = currentNode.value;
      currentNode = currentNode.next;
    }
    return max;
  }
}

const mySSL = new SLL();
mySSL.addFront(1).addFront(3).addFront(2)
console.log(mySSL.max());
console.log(mySSL.min());
console.log(mySSL.average());