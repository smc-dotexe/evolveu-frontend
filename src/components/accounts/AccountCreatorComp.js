import React from 'react'

class AccountCreatorComp extends React.Component {

  render() {
    return(
      <div className = 'creatorContents'>
      <button
        type = 'button'
        id = 'xBtn'
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
        id = 'createBtn'
        onClick = {this.props.passCreateAccount}>
          Create Account
      </button>
      </div>

    )
  }
}

export default AccountCreatorComp
