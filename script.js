/*eslint-disable*/

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      nextNode: null
    }
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head.nextNode === null) {
      this.head.nextNode = newNode;
    } else {
      let lastNode = this.head.nextNode;
      
        while (lastNode.nextNode) {
          lastNode = lastNode.nextNode;
        }
      
      lastNode.nextNode = newNode;
    }    
  }

  prepend(value = 'head') {
    let newNode = new Node(value);

    newNode.nextNode = this.value;
    this.value = newNode;
    
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList(0);

list.append(1)
list.append(2)
list.append(3)



console.log(list)
