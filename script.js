/*eslint-disable*/

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.nextNode = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.nextNode === null) {
      this.nextNode = newNode;
    } else {
      let lastNode = this.nextNode;
      
        while (lastNode.nextNode) {
          lastNode = lastNode.nextNode;
        }
      
      lastNode.nextNode = newNode;
    }    
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList('head');

list.append(1)
list.append(2)
list.append(3)


console.log(list)
