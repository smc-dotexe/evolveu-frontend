import React from 'react'
import Accounts from './Accounts'
import AccountsCtrl from './AccountsCtrl'
class AccountsContainer extends React.Component {

  state = {
    addAccount: [],
    counter: 0,
    acctCtrl: new AccountsCtrl('', '')
  }

  clickHandler = (element) => {
    element = <Accounts key = {this.state.counter}/>
    this.setState({
      addAccount: this.state.addAccount.concat(element),
      counter: this.state.counter + 1
    })
  }

  render() {

    return(
    <div>
      <div className = 'accounts'>
        <button type = 'button' onClick = {this.clickHandler}>
          Add Account
        </button>
      </div>
      <div>
        {this.state.addAccount}
      </div>
    </div>

    )
  }
}

export default AccountsContainer
