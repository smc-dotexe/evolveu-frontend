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
      total: 0,
      currentbalance:[],
      acctCtrl: new AccountsCtrl('', '')
    }
  }


  pushBalance = (a) => {
    this.setState({
      currentbalance: this.state.currentbalance.concat(a),
      total: Number(this.state.currentbalance)
      })
    console.log('pushbalance: ', a)
    console.log('state.currentbalance: ' + this.state.currentbalance)

  }
  // balanceArr = (a) => {
  //   console.log('balanceArr ', a)
  //   this.state.currentBalance.push('card1: '+ a)
  //
  //   // this.setState({currentBalance: this.state.currentBalance.push(a)})
  //   console.log('currentBalance state ', this.state.currentBalance)
  // }



//Add an account
  clickHandler = () => {
  let element = <Accounts key = {this.state.key} count = {this.state.counter} pass = {this.state.counter} currbalance = {this.pushBalance} actualBalance = {this.state.total} del = {this.deleteAcct}/>
    // const acctCtrl = this.state.acctCtrl
    // const data = this.state.cardData
    // data.push({counter: this.state.counter, balance: this.props.pass})
    // console.log(data)
        this.setState({
          accountList:  this.state.acctCtrl.addAccount(element),
          counter: this.state.counter + 1,
          key: this.state.key + 1
        })
  console.log('element ', element)
  }


//Remove an account
  deleteAcct = (event) => {
    let a = Number([event.target.getAttribute('pass')])
    let b = this.state.accountList.map(k => k.props.count)
    let c = b.indexOf(a)

      this.setState({
        accountList: this.state.acctCtrl.removeAccount(c, 1),
        counter: this.state.counter -1
      })
}

  totalAccounts = () => {
    console.log('clicked')
  }

  render() {
    console.log(this.state.accountList)
    return(
    <div>
      <div className = 'addAcctBtn'>
        <button type = 'button' onClick = {this.clickHandler}>
          Add Account
        </button>
      </div>
      <div className = 'totalBalance'>
        <h4 onClick = {this.totalAccounts}>Total Balance: {this.state.total} </h4>
      </div>
      <div>
        {this.state.accountList}
      </div>
    </div>

    )
  }
}

export default AccountsContainer
