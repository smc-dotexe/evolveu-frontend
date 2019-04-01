import React from 'react'
import '.././App.css'
import Account from './accountclass'

class Accounts extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      balance: '',
      accountInit: new Account(0,''),
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
    <div className = 'accounts'>

      <h1>Current Balance: {this.state.balance} </h1>
      <input type = 'number' name = 'userInput' value = {this.state.userInput} onChange = {this.userState}/>
      <button className = 'acctBtn' type = 'button' name = 'deposit' onClick = {this.clickHandler}>Deposit</button>
      <button className = 'acctBtn' type = 'button' name = 'withdraw' onClick = {this.clickHandler}>Withdraw</button>

    </div>
    </div>
  )
}
}

export default Accounts
