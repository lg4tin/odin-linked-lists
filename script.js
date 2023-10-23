/*eslint-disable*/
console.log('hi')

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const nodeOne = new Node('hi')

console.log(nodeOne)

const list = {
  head: {
      value: 6,
      next: {
          value: 10,                                             
          next: {
              value: 12,
              next: {
                  value: 3,
                  next: null	
                  }
              }
          }
      }
  }
;