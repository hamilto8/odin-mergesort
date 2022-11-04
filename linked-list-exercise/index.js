const linkedListDiv = document.querySelector(".linked-list");
const startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startListFunction);

function startListFunction() {
  console.log("started");
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {}
  append(value) {
    // add new node containing value at end of list
  }
  prepend(value) {
    //adds new node containing value to start of the list
  }

  size() {
    // returns total number of nodes in the list
  }
  head() {
    // returns the first node in the list
  }

  tail() {
    // returns the last node in the list
  }

  at(index) {
    // returns the node at a given index
  }

  pop() {
    // removes the last element from the list
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The fomrat should be: ( value ) -> (value) -> (value) -> null
  }

  // ** Extra Credit Below **

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
  }

  removeAt(index) {
    // removes the node at the given index
  }

  // Extra credit tip: WHen you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated
}
