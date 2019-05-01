import React from 'react'
import AccountClass from './accountClass'
import AccountCtrl from './accountCtrl'
import AccountContainer from './AccountContainer'
import './stylingAccounts.css'


class AccountComponent extends React.Component {
  constructor(props) {
    super(props)
      this.objAccount = new AccountClass()
        this.state = {
          userInput:'',
          thethis:''
        }
  }

//INPUT CHANGE HANDLER
  changeHandler = (event) => {
    const { name, value } = event.target
    this.setState({ [name] : value })
  }

//DEPOSIT AND WITHDRAWAL FUNCTIONS
  clickHandler = (event) => {
    let x = Number(this.state.userInput)
    let y = event.target.name
    let theId = Number(this.props.passId)

    switch (y) {
      case 'deposit':
        this.props.passObj[theId].balance =
        this.props.objCtrl.depositUpdate(theId, x)
        this.setState({userInput: ''})
      break
      case 'withdrawal':
        this.props.passObj[theId].balance =
        this.props.objCtrl.withdrawalUpdate(theId, x)
        this.setState({userInput: ''})
      break
      default:
        return null

    }
  }

  render() {
      let theId = this.props.passId
    return(
      <div className = 'accountComponent'>
        <button
          id = 'xBtn'
          type = 'button'
          name = 'closeAccount'
          onClick = {this.props.passDisplay}>
            x
        </button>

        <h4>Account: {this.props.passObj[theId].accountName}</h4>
        <h4>Current Balance: ${this.props.passObj[theId].balance}</h4>

        <input
          type = 'number'
          id = 'userInput'
          value = {this.state.userInput}
          name = 'userInput'
          placeholder = 'Enter Amount'
          onChange = {this.changeHandler}/><br />

        <button
          type = 'button'
          name = 'deposit'
          onClick = {this.clickHandler}>
            Deposit
        </button>

        <button
          type = 'button'
          name = 'withdrawal'
          onClick = {this.clickHandler}>
            Withdrawal
        </button><br />

        <button
          type = 'button'
          name = 'doneAccount'
          onClick = {this.props.passDisplay}>
            Done
        </button>

      </div>
    )
  }
}



export default AccountComponent
