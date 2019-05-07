//Queue = FIFO

class QClass {
  constructor(item) {
    this.item = item
    this.qArr = []
  }

    add(item) {
      return this.qArr.push(item)
    }

    remove() {
      if (this.qArr.length === 0) {
        return 'array is empty'
      } else {
        return this.qArr.shift()
      }
    }

    showFirst() {
      if (this.qArr.length === 0) {
        return 'array is empty'
      } else {
        return this.qArr[0]
      }
    }

    display() {
      if (this.qArr.length === 0) {
        return 'array is empty'
      } else {
        return this.qArr
      }
    }
}

export default QClass
