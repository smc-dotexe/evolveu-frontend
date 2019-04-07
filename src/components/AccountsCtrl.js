
class AccountsCtrl {
  constructor(acctArr, acctName, balanceArr) {
    this.acctArr = []
    this.balanceArr = []
    this.acctName = acctName
  }

  addAccount(i) {
    this.acctArr.push(i)
    return this.acctArr
  }

  removeAccount(i, s) {
    this.acctArr.splice(i,s)
    return this.acctArr
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

  totalValue(i) {
    this.balanceArr.push(i)
    let g
    for (g of this.balanceArr) {
      g += g
    }
    return g
  }
}

export default AccountsCtrl
