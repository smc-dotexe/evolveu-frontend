import React from 'react'
import MathComp from './MathComp'
import AccountsContainer from './accounts/AccountContainer'
import CommCityComp from './cities/CommCityComp'
import LinkedList from './linkedlist/LinkedListComp'
import './accounts/stylingAccounts.css'
import '.././App.css'

export default class Icons extends React.Component {
  state = {
    isClicked: false,
    calculator: false,
    accounts: false,
    cities: false,
    linkList: false,
  }

  clickHandler = (event) => {
    const { id } = event.target
    console.log(id)
    switch(id) {
      case 'calculator' :
        this.setState(prevState => ({
          calculator: !prevState.calculator,
          accounts: false,
          cities: false,
          linkedList: false,
        }))
        break

      case 'accounts' :
        this.setState(prevState => ({
          accounts: !prevState.accounts,
          calculator: false,
          cities: false,
          linkedList: false,
        }))
        break

      case 'cities' :
        this.setState(prevState => ({
          cities: !prevState.cities,
          calculator: false,
          accounts: false,
          linkedList: false,
        }))
        break

      case 'linkedList':
        this.setState(prevState => ({
          linkedList: !prevState.linkedList,
          cities: false,
          calculator: false,
          accounts: false,
        }))
      default:
        return null

    }

}

  render() {

    return (
      <div>
          <div className = 'iconheader'>

          <div className = 'icon'>
            <i
              id = 'calculator'
              className= 'uil uil-calcualtor'
              value = {this.state.calculator}
              onClick = {this.clickHandler}></i>
          </div>

          <div className = 'icon'>
            <i
              id = 'accounts'
              className= 'uil uil-bill'
              value = {this.state.accounts}
              onClick = {this.clickHandler}></i>
          </div>

          <div className = 'icon'>
            <i
              id = 'cities'
              className = 'uil uil-building'
              value = {this.state.cities}
              onClick = {this.clickHandler}></i>
          </div>

          <div className = 'icon'>
            <i
              id = 'linkedList'
              className='uil uil-link'
              value = {this.state.linkedList}
              onClick = {this.clickHandler}></i>
          </div>

          </div>

      <div>
        {this.state.calculator ? <MathComp /> : null}
        {this.state.accounts ? <AccountsContainer /> : null}
        {this.state.cities ? <CommCityComp /> : null}
        {this.state.linkedList ? <LinkedList />: null}

      </div>

      </div>
    )
  }
}
