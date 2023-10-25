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

  prepend(value) {
    let newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
    
  }

  size() {
    let count = 0;
    let node = this.head;

    while(node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let tail = this.head.nextNode;

    while (tail.nextNode) {
      tail = tail.nextNode;
    }

    return tail;
  }

  at(index) {
    if (index <= this.size()) {
      let indexNode = this.head;
      for (let i = 0; i < index; i++) {
        indexNode = indexNode.nextNode;
      }
      return indexNode;
    } else {
      return false;
    }
  }

  pop() {
    let lastIndex = this.size() - 2;

    return this.at(lastIndex).nextNode = null;
  }

  contains(value, obj = this) {
    
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        return this.contains(value, obj[key]);
      }

      if (obj[key] === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    let size = this.size();
    let index = null;
    

    for (let i = 0; i < size; i++) {
      if (this.at(i).value == value) {
        index = i;
      } 
    }
    return index;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList('a');

list.append('b')
list.append('c')
list.append('d')
list.append('e')

console.log(list)
