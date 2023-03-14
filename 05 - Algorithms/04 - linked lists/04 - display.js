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

  // is "value" to be found anywhere in this list?
  contains(value) {
    if(!this.head) return null;

    let currentNode = this.head;
    while(currentNode.next) {
      if(currentNode.value == value){
        return true
      }
      currentNode = currentNode.next;
    }

    return false;
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
  // how many nodes are in my list?
  length() {
    let size = 0;
    let currentNode = this.head;
    while(currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  // a method for adding nodes to the front of our list
  front() {
    if(!this.head) return null;
    return this.head.value;
  }

  // a method for removing the first node
  removeFront() {
    if(!this.head) return null;
    this.head = this.head.next;

    return this;
  }

  last() {
    if(!this.head) return null;

    let currentNode = this.head;
    while(currentNode.next) {
      console.log(`current nodes value is ${currentNode.value}`);
      currentNode = currentNode.next;
    }

    return this.currentNode;
  }
  // a method for viewing our list
  view() {
    // will have to see all of the nodes...
    // starting from the beginning of our list
    let currentNode = this.head;
    while(currentNode) {
      console.log(`current nodes value is ${currentNode.value}`);
      currentNode = currentNode.next;
    }
  }
}

const mySSL = new SLL();
mySSL.addFront("value 1").addFront("value 2")
console.log(mySSL.display());