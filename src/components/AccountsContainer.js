import React from 'react'
import Accounts from './Accounts'
import AccountsCtrl from './AccountsCtrl'
class AccountsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accountList: [],
      counter: 0,
      key: 0,
      acctCtrl: new AccountsCtrl('', '')
    }
  }


//Passing the accounts component to the controller array. Then it comes back in to accountList array.
  clickHandler = (element) => {
    element = <Accounts key = {this.state.key} count = {this.state.counter} pass = {this.state.counter} del = {this.deleteAcct}/>

        this.setState({
          accountList:  this.state.acctCtrl.addAccount(element),
          counter: this.state.counter + 1,
          key: this.state.key + 1
        })

  }

  deleteAcct = (event) => {
    let a = Number([event.target.getAttribute('pass')])
    let b = this.state.accountList.map(k => k.props.count)
    let c = b.indexOf(a)

this.setState({
  accountList: this.state.acctCtrl.removeAccount(c, 1),
  counter: this.state.counter -1
})

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
