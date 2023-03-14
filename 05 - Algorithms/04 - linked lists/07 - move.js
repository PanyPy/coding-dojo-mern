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

  moveMinToFront() {
    if(!this.head) return null;
    
    let currentNode = this.head;
    // get min
    let min = currentNode.value;
    while(currentNode) {
      if(currentNode.value < min) min = currentNode.value;
      currentNode = currentNode.next;
    }

    // return first if min
    currentNode = this.head;
    if(currentNode.value == min) return this;

    // move min to front
    while(currentNode.next.value !== min) {
      currentNode = currentNode.next;
    }
    const firstNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    firstNode.next = this.head;
    this.head = firstNode
  }

  moveMaxToBack() {
    if(!this.head) return null;
    
    let currentNode = this.head;
    // get min
    let max = currentNode.value;
    while(currentNode) {
      if(currentNode.value > max) max = currentNode.value;
      currentNode = currentNode.next;
    }

    // return first if min
    currentNode = this.head;
    if(currentNode.value == max) return this;

    // move max to back
    while(currentNode.next.value !== max) {
      currentNode = currentNode.next;
    }
    const lastNode = currentNode.next;
    currentNode.next = lastNode.next;

    currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    lastNode.next = null;
    currentNode.next = lastNode;
    return this;
  }

  // a method for adding nodes to the front of our list
  addBack(value) {
    // creating new node
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    // returning this, allowing for chaining methods
    return this;
  }

  // a method for removing the last node
  removeBack() {
    if(!this.head) return null;

    let currentNode = this.head;
    while(currentNode.next && !currentNode.next.next) {
      currentNode = currentNode.next;
    }

    this.head = this.head.next;

    return this;
  }

  display() {
    let nodes = "";
    let currentNode = this.head;
    while(currentNode) {
      nodes += currentNode.value+" ";
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

const mySSL = new SLL();
mySSL.addBack(4).addBack(23).addBack(1).addBack(22)
console.log(mySSL.display());
// mySSL.moveMinToFront();
// console.log(mySSL.display());
mySSL.moveMaxToBack();
console.log(mySSL.display());