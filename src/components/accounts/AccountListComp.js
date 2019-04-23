import React from 'react'
import AccountContainer from './AccountContainer'
import AccountCtrl from './accountCtrl'
import AccountComponent from './AccountComponent'
import './stylingAccounts.css'

class AccountListComp extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){

    const list = this.props.passArray.map((x, b)=>
        <li key = {b}>
          <strong>Name:</strong> {x.accountName}<br />
          <strong>Balance:</strong> $ <u>{x.balance}</u><br />
          <button
            className ='editBtn'
            id= {b}
            onClick = {this.props.passAccountWindow}>
              Edit Account
          </button><br />
          <button
            className = 'listBtn'
            type = 'button'
            id = {b}
            onClick = {this.props.passDeleteAccount}>
              Delete Account
          </button><br />
        </li>)

    return(

      <div className = 'list'>
        <ul>{list}</ul>
      </div>

    )
  }


}

export default AccountListComp
