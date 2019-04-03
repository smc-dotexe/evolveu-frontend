import React from 'react'
import Accounts from './Accounts'
import AccountsCtrl from './AccountsCtrl'
class AccountsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accountList: [],
      counter: -1,
      key: 0,
      acctCtrl: new AccountsCtrl('', '')
    }
  }



  clickHandler = (element, event) => {
    element = <Accounts key = {this.state.key} count = {this.state.counter} del = {this.deleteAcct}/>
    console.log('element ', element)

        this.setState({
          accountList:  this.state.acctCtrl.addAccount(element),
          counter: this.state.counter + 1,
          key: this.state.key + 1
        })
    console.log('AccountsContainer: this.state.acctCtrl ', this.state.acctCtrl)
    console.log('AccountsContainer: this.state.accountList ', this.state.accountList)
  }

  deleteAcct = () => {
    let b = this.state.accountList.map(a=>a.props.count)
    console.log(b)
    // for(b in this.state.accountList) {
    //   // this.setState({
    //   //   accountList: this.state.acctCtrl.removeAccount(b, 1),
    //   // })
    //   console.log(b)
    // }
    this.setState({
      accountList: this.state.acctCtrl.removeAccount(b, 1),
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
