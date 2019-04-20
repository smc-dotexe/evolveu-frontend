import React from 'react'
import AccountContainer from './AccountContainer'
import AccountCtrl from './accountCtrl'
import AccountComponent from './AccountComponent'
import './stylingAccounts.css'

class AccountListComp extends React.Component {
  constructor(props) {
    super(props)

  }

//WHEN EDIT BUTTON IS CLICKED. ACCOUNT COMPONENT WINDOW SHOWS WITH SELECTED DATA



//DELETE SPECIFIC ACCOUNT FUNCTION
  deleteAccount = (event) => {
    let x = event.target.id
    let accountId = this.props.obj.accountArr[x].accountId

    this.props.obj.deleteAccount(accountId)

    this.props.passCloseDisplay()
  }

  render(){
    const list = this.props.passArray.map((x, b)=>
        <li key = {b}>
          <button className ='editBtn'  id= {b} onClick = {this.props.passAccountWindow} >
            Edit Account
          </button><br />
          <button className = 'listBtn' type = 'button' id = {b} onClick = {this.deleteAccount}>
            Delete Account
          </button><br />

          <strong>Name:</strong> {x.accountName}<br />
          <strong>Balance:</strong> $ <u>{x.balance}</u>

        </li>)
    return(
      <div>
          <div>
              <div className = 'list'>
                <ul>{list}</ul>
              </div>

          </div>

      </div>
    )
  }


}

export default AccountListComp
