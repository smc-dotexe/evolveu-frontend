class Account {
  constructor(initBalance) {
    this.initBalance = initBalance
  }

  deposit(a) {
    return this.initBalance += a
  }

  withdraw(b) {
    return this.initBalance -= b
  }

  balance() {
    return this.initBalance
  }
}

export default Account
