class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, size) {
    this.head = head;
    this.size = 0;
  }

  prepend(value) {
    //adds new node containing value to start of the list

    this.head = new Node(value, this.head);
    this.size += 1;
  }

  append(value) {
    // add new node containing value at end of list
    let node = new Node(value);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  getHeadNode() {
    // returns the first node in the list
    console.log(this.head);
    return this.head;
  }

  tail() {
    // returns the last node in the list
    let current = this.head;
    while (current) {
      if (current.next === null) {
        console.log(current);
        return current;
      }
      current = current.next;
    }
  }

  at(index) {
    // returns the node at a given index
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current);
      }
      count += 1;
      current = current.next;
    }
    return;
  }

  pop() {
    // removes the last element from the list
    this.size -= 1;
    let current = this.head;
    let previous;
    let count = 0;
    while (count < this.size) {
      previous = current;
      current = current.next;
      count += 1;
    }
    previous.next = current.next;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
    let current = this.head;
    let indexCount = 0;
    while (current) {
      if (current.value === value) {
        return indexCount;
      }
      count += 1;
      current = current.next;
    }
    return null;
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The fomrat should be: ( value ) -> (value) -> (value) -> null
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // ** Extra Credit Below **

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }
    const node = new Node(value);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count += 1;
    }
    node.next = current;
    previous.next = node;
    this.size += 1;
  }

  removeAt(index) {
    // removes the node at the given index
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size -= 1;
  }

  // Extra credit tip: WHen you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated
}

const ll = new LinkedList();

ll.append(100);
ll.append(200);
ll.append(300);
ll.prepend(400);

ll.toString();

ll.getSize();
ll.getHeadNode();
