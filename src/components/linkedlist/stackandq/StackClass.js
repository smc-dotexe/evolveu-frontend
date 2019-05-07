//STACK = LIFO

class Stack {
  constructor(item) {
    this.item = item
    this.arr = []
  }
    add(item) {
      return this.arr.push(item)
    }

    pop() {
      if (this.arr.length === 0) {
        return 'array is empty'
      } else {
        return this.arr.pop()
      }
    }

    showLast() {
      if(this.arr.length ===0) {
        return 'array is empty'
      } else {

        return this.arr[this.arr.length - 1]
      }
    }
    display() {
      return this.arr
    }

}
export default Stack
