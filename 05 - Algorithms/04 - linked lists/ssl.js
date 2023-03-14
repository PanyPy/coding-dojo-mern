class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor(value) {
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
mySSL.view();