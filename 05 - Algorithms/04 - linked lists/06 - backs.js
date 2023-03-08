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

  back() {
    if(!this.head) return null;

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
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
mySSL.addBack("value 1").addBack("value 2").addBack("value 3")
mySSL.view();
console.log(mySSL.back());
// console.log("after front removed");
mySSL.removeBack();
mySSL.view();