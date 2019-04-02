import React from 'react'
import '.././App.css'
import Account from './accountclass'
import AccountsCtrl from './AccountsCtrl'
import AccountsContainer from './AccountsContainer'

class Accounts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      balance: '',
      accountInit: new Account(0)
    }
}

//setting state of userInput to input box value
  userState = (event) => {
    const { name, value } = event.target
    this.setState({ [name] : value})
  }

//attached to the deposit and withdraw buttons
  clickHandler = (event) => {
    let x, a
    x = event.target.name
    a = Number(this.state.userInput)
    const test = this.state.accountInit

    switch(x) {
      case 'deposit' :
        this.setState({
          balance: test.deposit(a),
          userInput: ''})
      break
      case 'withdraw' :
        this.setState({
          balance: test.withdraw(a),
          userInput: ''})
      break
      default :
        return null
  }

}


  render() {

    console.log(this.state.userInput)
    console.log(this.state.balance)

  return (
    <div className = 'acctContainer'>
    {/*Accounts Card*/}
    <div className = 'accounts'>
      <select>
        <option value = 'select'>Account Type</option>
        <option value = 'chequings'>Chequings</option>
        <option value = 'savings'>Savings</option>
        <option value = 'rsvp'>RSVP</option>
        <option value = 'tfsa'>TFSA</option>
      </select>
      <h4 className = 'currBalanceTitle'>Current Balance: $</h4>
      <button className = 'deleteAcct' type = 'button' name = 'deleteAcct' onClick = {this.deleteAcct}>x</button>
      <p className = 'userBalance'>{this.state.balance}</p>
      <input className = 'userCurrency' type = 'number' name = 'userInput' placeholder = 'Enter Amount' value = {this.state.userInput} onChange = {this.userState}/>
      <button className = 'acctBtnDep' type = 'button' name = 'deposit' onClick = {this.clickHandler}>Deposit</button>
      <button className = 'acctBtnWdrw' type = 'button' name = 'withdraw' onClick = {this.clickHandler}>Withdraw</button>


    </div>
    </div>
  )
}
}

export default Accounts
