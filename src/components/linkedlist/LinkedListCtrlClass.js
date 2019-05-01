import NodeClass from './NodeClass'

class LinkedListCtrlClass {
  constructor() {
    this.head = null
    this.tail = null
    this.position = null
  }

  first() {
    let temp = this.position
    while(temp.prev !== null) {
      temp = temp.prev
    }
    return temp.subject
  }


  last() {
    let temp = this.position
    while(temp.next !== null) {
      temp = temp.next
    }
    return temp.subject
  }

  next() {
    let temp = this.position
    if (temp.next !== null) {
      console.log(temp.subject)
      return temp.next

    }
  }


  insert(a, b) {
    let node = new NodeClass(a, b)
    if(!this.head) {
      this.head = node
      this.tail = node
      this.position = node
    } else {
      let temp = this.tail
      this.tail = node
      node.prev = temp
      temp.next = node
    }

    return this
  }
}

export default LinkedListCtrlClass
