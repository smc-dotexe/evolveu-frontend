import React from 'react'

class AccountCreatorComp extends React.Component {

  render() {
    return(
      <div>
      <button
        type = 'button'
        onClick = {this.props.passClickHideDisplay}>
          x
      </button><br />

      <input
        type = 'text'
        id = 'inputAccountName'
        placeholder = 'Enter Account Name'
        name = 'inputAccountName'/>
      <br />

      <input
        type = 'number'
        id = 'inputAccountBalance'
        placeholder = 'Enter Balance '
        name = 'inputAccountBalance'/>
      <br />
{/*CREATE ACCOUNT BUTTON */}
      <button
        type = 'button'
        onClick = {this.props.passCreateAccount}>
          Create Account
      </button>
      </div>

    )
  }
}

export default AccountCreatorComp
