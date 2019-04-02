
class AccountsCtrl {
  constructor(acctArr, acctName) {
    this.acctArr = []
    this.acctName = acctName
  }

  addAccount(i) {
    let x = this.acctArr
    x.push(i)
    console.log('AccountsCtrl: this.acctArr ', this.acctArr)
    console.log('AccountsCtrl: i ', i)
    return x
  }

  removeAccount(i) {
    return this.acctArr.splice(i)
  }

  nameAccount(i) {
    return this.acctName = i
  }

  highestValue() {
    return Math.max(...this.acctArr)
  }

  lowestValue() {
    return Math.min(...this.acctArr)
  }
}

export default AccountsCtrl
