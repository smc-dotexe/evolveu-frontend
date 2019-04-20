import React from 'react'

class AccountSummariesComp extends React.Component {

  render() {
    const propsObj = this.props.passObj
    const propsObjLength = this.props.passObj.accountArr.length
    return (
      <div>
        <h6 className = 'totalAccount'>Total of Balances:{' '}${propsObj.totalAccounts()} </h6>

        <h6 className = 'highestAccount'>
          Highest Account:{'  '}
          {propsObjLength > 0 ? propsObj.highestAccount().accountName : null}{'    '}$
          {propsObjLength > 0 ? propsObj.highestAccount().balance : null}
        </h6>

        <h6 className = 'lowestAccount'>
          Lowest Account:{'  '}
          {propsObjLength > 0 ? propsObj.lowestAccount().accountName : null}{'    '}$
          {propsObjLength > 0 ? propsObj.lowestAccount().balance : null}
        </h6>
      </div>


    )
  }

}

export default AccountSummariesComp
