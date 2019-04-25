import React from 'react'
import CommunityClass from './CommunityClass'
import CityClass from './CityClass'
import PopulationComp from './PopulationComp'

class EditWindow extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    let x = this.props.passArrIdState

    return(
      <div className = 'editWindow'>
      
        <button
          type = 'button'
          onClick = {this.props.passCloseEditWindow}>
            x
        </button>

        <ul>
          <li>Location: {this.props.passCommArr.name}</li>
          <li>Population: {this.props.passCommArr.population}</li>
          <li>Hemisphere: {this.props.passObjComm.whichSphere(x)}</li>
          <li>Size: {this.props.passCommArr.howBig()}</li>
        </ul>

        <PopulationComp
          passCommArr = {this.props.passCommArr}
          passCounter = {this.props.passCounter}
          passReRender = {this.props.passReRender}/>
      </div>
    )
  }
}

export default EditWindow
