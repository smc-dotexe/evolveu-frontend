import React from 'react'

class AccountList extends React.Component {
  constructor() {
    super()
      this.state = {
        accountCtrlInit: this.props.sendprop
      }
  }

  render() {

  const accountcard = this.state.accountCtrlInit.accountArr.map((x,index) =>
    <div>
      <h1>{x.accountName} + {x.balance} + {index}</h1>
    </div>
)
    return(
      <div>
      <h1>{accountcard}</h1>
      </div>
    )
  }
}

export default AccountList
