import React from 'react'
import MathComp from './MathComp'
import AccountsContainer from './accounts/AccountContainer'
import CommCityComp from './cities/CommCityComp'
import LinkedList from './linkedlist/LinkedListComp'
import Home from './home/Home'
import FlaskList from './flask/FlaskList'
import './accounts/stylingAccounts.css'
import '.././App.css'

export default class Icons extends React.Component {
  state = {
    isClicked: false,
    home: true,
    calculator: false,
    accounts: false,
    cities: false,
    linkedList: false,
    flask: false,
  }

  clickHandler = (event) => {
    const { id } = event.target
    console.log('ID', id)
    switch(id) {
      case 'home':
        this.setState(prevState =>({
          home: !prevState.home,
          calculator: false,
          accounts: false,
          cities: false,
          linkedList: false,
          flask: false,
        }))
        if (this.state.home) {

        }
        break
      case 'calculator' :
        this.setState(prevState => ({
          calculator: !prevState.calculator,
          home: false,
          accounts: false,
          cities: false,
          linkedList: false,
          flask: false,
        }))
        break

      case 'accounts' :
        this.setState(prevState => ({
          accounts: !prevState.accounts,
          home: false,
          calculator: false,
          cities: false,
          linkedList: false,
          flask: false,
        }))
        break

      case 'cities' :
        this.setState(prevState => ({
          cities: !prevState.cities,
          home: false,
          calculator: false,
          accounts: false,
          linkedList: false,
          flask: false,
        }))
        break

      case 'linkedList':
        this.setState(prevState => ({
          linkedList: !prevState.linkedList,
          home: false,
          cities: false,
          calculator: false,
          accounts: false,
          flask: false,
        }))
        break
      
      case 'flask':
        this.setState(prevState => ({
          flask: !prevState.flask,
          home: false,
          cities: false,
          calculator: false,
          accounts: false,
          linkedList: false,
        }))
        break

      default:
        return null

    }

}

  render() {

    return (
      <div>
          <div className = 'iconheader'>

          <div className ={this.state.home ? 'iconBorder' : 'iconNoBorder'}>
            <i
              id = 'home'
              className ='uil uil-home'
              value = {this.state.home}
              onClick = {this.clickHandler}></i>
          </div>

          <div className ={this.state.calculator ? 'iconBorder' : 'iconNoBorder'}>
            <i
              id = 'calculator'
              className= 'uil uil-calcualtor'
              value = {this.state.calculator}
              onClick = {this.clickHandler}></i>
          </div>

          <div className ={this.state.accounts ? 'iconBorder' : 'iconNoBorder'}>
            <i
              id = 'accounts'
              className= 'uil uil-bill'
              value = {this.state.accounts}
              onClick = {this.clickHandler}></i>
          </div>

          <div className ={this.state.cities ? 'iconBorder' : 'iconNoBorder'}>
            <i
              id = 'cities'
              className = 'uil uil-building'
              value = {this.state.cities}
              onClick = {this.clickHandler}></i>
          </div>

          <div className ={this.state.linkedList ? 'iconBorder' : 'iconNoBorder'}>
            <i
              id = 'linkedList'
              className='uil uil-link'
              value = {this.state.linkedList}
              onClick = {this.clickHandler}></i>
          </div>

          <div className = {this.state.flask ? 'iconBorder' : 'iconNoBorder'}>
          <i 
            id = 'flask'
            className='uil uil-table'
            value = {this.state.flask}
            onClick = {this.clickHandler}></i>
          </div>
          </div>

      <div>
        {this.state.home ? <Home /> : null}
        {this.state.calculator ? <MathComp /> : null}
        {this.state.accounts ? <AccountsContainer /> : null}
        {this.state.cities ? <CommCityComp /> : null}
        {this.state.linkedList ? <LinkedList />: null}
        {this.state.flask ? <FlaskList /> : null}

      </div>

      </div>
    )
  }
}
