import React from 'react'

class AccountSummariesComp extends React.Component {

  render() {
    const propsObj = this.props.passObj
    const propsObjLength = this.props.passObj.accountArr.length
    return (
      <div>
        <h4 className = 'totalAccount'>Total of Balances:{' '}${propsObj.totalAccounts()} </h4>

        <h4 className = 'highestAccount'>
          Highest Account:{'  '}
          {propsObjLength > 0 ? propsObj.highestAccount().accountName : null}{'    '}$
          {propsObjLength > 0 ? propsObj.highestAccount().balance : null}
        </h4>

        <h4 className = 'lowestAccount'>
          Lowest Account:{'  '}
          {propsObjLength > 0 ? propsObj.lowestAccount().accountName : null}{'    '}$
          {propsObjLength > 0 ? propsObj.lowestAccount().balance : null}
        </h4>
      </div>


    )
  }

}

export default AccountSummariesComp
