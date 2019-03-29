class Account {
  constructor(initBalance, accountName) {
    this.initBalance = initBalance
    this.accountName = accountName
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
