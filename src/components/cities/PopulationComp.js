import React from 'react'
import CommunityClass from './CommunityClass'
import CityClass from './CityClass'

class PopulationComp extends React.Component {
  constructor(props) {
    super(props)
  }

  clickHandler = (event) => {
    let targetId = event.target.id
    let userInput = Number(document.getElementById('userInputPop').value)

    switch(targetId) {
      case 'movedInBtn':
        this.props.passCommArr.movedIn(userInput)
        this.props.passReRender()
        break
      case 'movedOutBtn':
        this.props.passCommArr.movedOut(userInput)
        this.props.passReRender()
        break
      default:
        return null
    }
  }

  render() {
    
    return(
      <div>
        <input type = 'number' id = 'userInputPop' placeholder = 'Edit Population' /><br />
        <button
          type = 'button'
          id = 'movedInBtn'
          onClick = {this.clickHandler}>
            Moved In
        </button>
        <button
          type = 'button'
          id = 'movedOutBtn'
          onClick = {this.clickHandler}>Moved Out</button>
      </div>
  )

}


}


export default PopulationComp
