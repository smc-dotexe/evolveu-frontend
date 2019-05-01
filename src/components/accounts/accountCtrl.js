import AccountClass from './accountClass'

class AccountCtrl {
  constructor() {
    this.accountArr = []
    this.counter = 0
  }

  counterIncrease() {
    let x
    x = this.counter += 1
    return x
  }

  createAccount(a, b) {
    this.counterIncrease()
    const newAccount = new AccountClass(this.counter, a, b)
    this.accountArr.push(newAccount)
    return this.accountArr
  }


  totalAccounts() {
    let h
    h = this.accountArr.reduce((acc,val)=>acc+val.balance, 0)
    return h

  }

  highestAccount() {
    const max = this.accountArr.reduce((a, b) => (a.balance > b.balance) ? a : b)
    return max
  }


  lowestAccount() {
    const min = this.accountArr.reduce((a, b) => (a.balance < b.balance) ? a : b)
    return min
  }

  depositUpdate(a, b) {
    let arrayBalance = this.accountArr[a].balance
    arrayBalance += b
    return arrayBalance
  }

  withdrawalUpdate(a, b) {
    let arrayBalance = this.accountArr[a].balance
    arrayBalance -= b
    return arrayBalance
  }

  findAccountIndex(a) {
    let x = this.accountArr.findIndex(function(e){return e.accountId === a})
    return x
  }

  deleteAccount(s) {
      let a = this.findAccountIndex(s)
      this.accountArr.splice(a, 1)
      return this.accountArr
  }

  showAccount(a) {
    let x = this.findAccountIndex(a)
    return this.accountArr[x]
  }



}
export default AccountCtrl
