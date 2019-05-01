import React from 'react'
import CityClass from './CityClass'
import CommunityClass from './CommunityClass'
import EditWindow from './EditWindow'
import RenderingTable from './RenderingTable'
import CitySummaries from './CitySummaries'
import './commCityStyling.css'

class CommCityComp extends React.Component {
  constructor() {
    super()
      this.objCity = new CityClass()
      this.objCommunity = new CommunityClass()
      this.state = {
        displayEditWindow: false,
        editId:'',
        arrId:'',
        population: '',
      }
  }


//WHEN DELETE BUTTON IS CLICKED
  deleteBtn = (event) => {
    let x = event.target.id
    let cityId = this.objCommunity.communityArr[x].id

    this.objCommunity.deleteCity(cityId)
    this.closeEditWindow()

  }
//WHEN EDIT BUTTON IS CLICKED
  editBtn = (event) => {
    let x = event.target.id
    let arrId = this.objCommunity.communityArr[x].id
    this.setState({
      displayEditWindow: true,
      editId: x,
      arrId: arrId
    })
  }

//CLOSING THE EDIT WINDOW DISPLAY
  closeEditWindow = () => {
    this.setState({displayEditWindow: false})
  }

//SUBMITTING USER INPUTS
  newSubmit = (event) => {

    let locInput = document.getElementById('locationInput').value
    let latInput = Number(document.getElementById('latitudeInput').value)
    let longInput = Number(document.getElementById('longitudeInput').value)
    let popInput = Number(document.getElementById('populationInput').value)

    this.setState({population: popInput})
    this.objCommunity.addCity(locInput, latInput, longInput, popInput)
  }

//RERENDERING WHEN POPULATION IS UPDATED
  reRender = () => {this.setState({refresh: !this.state.refresh})}

  render() {

    return(
      <div className = 'commCityComp'>
        <h1 id = 'cityHeader'>Cities and Communities</h1>
        <div id = 'editWindow'>
          {this.state.displayEditWindow ?
            <EditWindow
              passObjComm = {this.objCommunity}
              passCommArr = {this.objCommunity.communityArr[this.state.editId]}
              passCloseEditWindow = {this.closeEditWindow}
              passReRender = {this.reRender}
              passArrIdState = {this.state.arrId}
              passPopulationState = {this.state.population}/>
               : null}
        </div>

        <div id ='renderTable'>
          <RenderingTable
            passObjCommunity = {this.objCommunity}
            passNewSubmit = {this.newSubmit}
            passDeleteBtn = {this.deleteBtn}
            passEditBtn = {this.editBtn}
          />
        </div>

        <div id = 'citySummaries'>
        <CitySummaries
          passObjCommunity = {this.objCommunity}/>
        </div>
      </div>
    )
  }

}


export default CommCityComp
