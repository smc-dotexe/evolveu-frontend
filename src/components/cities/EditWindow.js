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
      <div id = 'editWindowComponent'>

        <button
          type = 'button'
          onClick = {this.props.passCloseEditWindow}>
            x
        </button>

        <ul id = 'editUl'>
          <li className = 'editLi'>Location: <br />{this.props.passCommArr.name}</li>
          <li className = 'editLi'>Population:<br /> {this.props.passCommArr.population}</li>
          <li className = 'editLi'>Hemisphere:<br />{this.props.passObjComm.whichSphere(x)}</li>
          <li className = 'editLi'>Size:<br />{this.props.passCommArr.howBig()}</li>
        </ul>

        <PopulationComp
          passCommArr = {this.props.passCommArr}
          passReRender = {this.props.passReRender}
          passPopulationState = {this.props.passPopulationState}/>
      </div>
    )
  }
}

export default EditWindow
