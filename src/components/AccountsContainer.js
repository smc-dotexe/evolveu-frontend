import React from 'react'
import Accounts from './Accounts'
import AccountsCtrl from './AccountsCtrl'
class AccountsContainer extends React.Component {

  state = {
    accountList: [],
    counter: 0,
    acctCtrl: new AccountsCtrl('', '')
  }

  clickHandler = (element) => {
    element = <Accounts key = {this.state.counter}/>
    const test = this.state.acctCtrl
    this.setState({
      accountList:  test.addAccount(element),
      counter: this.state.counter + 1
    })
    console.log('AccountsContainer: this.state.acctCtrl ', this.state.acctCtrl)
    console.log('AccountsContainer: clickHandler this.state.addAccount ', this.state.accountList)
  }

  render() {
    return(
    <div>
      <div className = 'addAcctBtn'>

        <button type = 'button' onClick = {this.clickHandler}>
          Add Account
        </button>
      </div>
      <div>
        {this.state.accountList}
      </div>
    </div>

    )
  }
}

export default AccountsContainer
