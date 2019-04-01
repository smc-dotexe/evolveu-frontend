import React from 'react'

class AccountsCtrl {
  constructor(acctArr) {
    this.acctArr = []
  }

  addAccount(i) {
    this.acctArr.push(i)
    return this.acctArr
  }

  removeAccount(i) {
    this.acctArr.pop(i)
    return this.acctArr
  }
}

export default AccountsCtrl
