import React from 'react'
import MathComp from './MathComp'
import Accounts from './Accounts'
import AccountsContainer from './AccountsContainer'
import '.././App.css'

export default class Icons extends React.Component {
  state = {
    isClicked: false,
    calculator: false,
    accounts: false,
  }

  clickHandler = (event) => {
    let x = event.target.id

    if (x === 'calculator') {
      this.setState(prevState => ({calculator: !prevState.calculator}))
      this.setState({accounts: false})

    } else if (x === 'accounts') {
      this.setState(prevState => ({accounts: !prevState.accounts}))
      this.setState({calculator: false})

    } else {
      return null
    }

}

  test = (event) => {
    const { id } = event.target
    console.log(id)
    this.setState((prevState, event) => ({
    [id]: !prevState.id
    }))
  }

  render() {



    return (
      <div>
          <div className = 'iconheader'>

          <div className = 'icon'>
            <i id = 'calculator' className= 'uil uil-calcualtor' value = {this.state.calculator} onClick = {this.clickHandler}></i>
          </div>

          <div className = 'icon'>
            <i id = 'accounts' className= 'uil uil-bill' value = {this.state.accounts} onClick = {this.clickHandler}></i>
          </div>

          <div className = 'icon'>
            <i className='uil uil-meh'></i>
          </div>

          <div className = 'icon'>
            <i className='uil uil-focus'></i>
          </div>

          </div>

      <div>
        {this.state.calculator ? <MathComp /> : null}
        {this.state.accounts ? <AccountsContainer /> : null}
      </div>

      </div>
    )
  }
}
