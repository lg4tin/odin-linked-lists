/*eslint-disable*/
console.log('hi')

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const newNode = new Node(value);
    this.nextNode = newNode;
    
    
    let lastNode = this.nextNode;
    if (lastNode) {
      while (lastNode.nextNode) {
        alert('hi');
      }
    }lastNode.nextNode = newNode;
  }
  
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList('head');

list.append(4)

console.log(list)




const lists = {
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