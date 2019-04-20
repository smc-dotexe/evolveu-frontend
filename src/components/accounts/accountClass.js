class AccountClass {
  constructor(accountId, accountName, balance) {
    this.balance = balance || 0
    this.accountName = accountName || 'shane'
    this.accountId = accountId || 0

}


  deposit(a) {
    console.log(a)
    this.balance += a
    console.log('this.balance= ', this.balance)
    return this.balance
  }

  withdrawal(a) {
    return this.balance -= a
  }
  currentBalance(a) {
    return this.balance
  }
  accountType(a) {
    this.accountName = a
    return this.accountName
  }

  accountIdIncrease() {
    let x = this.accountId += 1
    return x
  }

}

export default AccountClass
