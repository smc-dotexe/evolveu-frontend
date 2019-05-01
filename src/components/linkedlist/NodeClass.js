class NodeClass {
  constructor(subject, amount){
    this.subject = subject
    this.amount = amount
    this.prev = null
    this.next = null
  }

  show() {
    return `Subject: ${this.subject}, Amount: ${this.amount}`
  }
}

export default NodeClass
