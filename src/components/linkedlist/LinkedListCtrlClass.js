import NodeClass from './NodeClass'

class LinkedListCtrlClass {
  constructor() {
    this.head = null
    this.tail = null
    this.position = null
    this.length = 0
  }

  first() {
    while (this.position.prev !== null) {
      this.position = this.position.prev
    }
    return this.position
  }

  last() {
    while(this.position.next !==null) {
      this.position = this.position.next
    }
    return this.position
  }

  next() {
    if (this.position.next !== null) {
      this.position = this.position.next
      return this.position
    } else {
      return this.position
    }
  }

  previous() {
    if (this.position.prev !== null) {
       this.position = this.position.prev
      return this.position
    } else {
      return this.position
    }
  }


    insert(a, b) {
      let node = new NodeClass(a, b)
      if (!this.head) {
          this.head = node
          this.tail = node
          this.position = node

      } else if (this.position.next !== null) {
          node.prev = this.position
          node.next = this.position.next
          this.position.next = node
          node.next.prev = node
          this.position = node

      } else {
          this.tail = node
          node.prev = this.position
          this.position.next = node
          this.position = node
      }
      this.length++
      return this
    }

    delete() {
      if (this.position.next !== null && this.position.prev !== null){

            this.position.prev.next = this.position.next
            this.position.next.prev = this.position.prev
            this.position = this.position.next
            this.length--

          return this

      } else if (this.position.next === null && this.position.prev !== null) {

            this.position.prev.next = null
            this.tail = this.position.prev
            this.position = this.position.prev
            this.length--

          return this

      } else if (this.position.prev === null && this.position.next !== null) {

            this.position.next.prev = null
            this.head = this.position.next
            this.position = this.position.next
            this.length--

          return this

      } else if (this.position.next === null && this.position.prev === null){

            this.head = null
            this.position = null
            this.tail = null
            this.length--

          return this
      }

   }
}
export default LinkedListCtrlClass
