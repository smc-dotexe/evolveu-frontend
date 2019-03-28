import React from 'react'
import accsFunc from './accsFunc'
import '.././App.css'

class Accounts extends React.Component {
  state = {
    userInput:'',
    balance: '',
  }

  userState = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value})
  }

  clickHandler = (event) => {
    let x, a
    x = event.target.name
    a = Number(this.state.userInput)

    switch(x) {
      case 'deposit' :
      this.setState({balance: accsFunc.deposit(a)})
      break
      case 'withdraw' :
      this.setState({balance: accsFunc.withdraw(a)})
      break
      default :
      console.log('hi')
    }

  }

  render() {

    console.log(this.state.userInput)
    console.log(this.state.balance)

  return (
    <div className = 'accounts'>

      <h1>Current Balance: {this.state.balance}</h1>
      <input type = 'number' value = {this.state.userInput} name = 'userInput' onChange = {this.userState} />
      <button type = 'button' name = 'deposit' onClick = {this.clickHandler}>Deposit</button>
      <button type = 'button' name = 'withdraw' onClick = {this.clickHandler}>Withdraw</button>

    </div>
  )
}
}

export default Accounts
