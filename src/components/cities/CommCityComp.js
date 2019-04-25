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
      this.objCommunity.addCity('test', 100, 200, 300)
      this.state = {
        displayEditWindow: false,
        editId:'',
        arrId:'',
        counter: 0,

      }
  }


//WHEN DELETE BUTTON IS CLICKED
  deleteBtn = (event) => {
    let x = event.target.id
    let cityId = this.objCommunity.communityArr[x].id

    this.objCommunity.deleteCity(cityId)
    this.closeEditWindow()
    this.setState({counter: this.state.counter - 1})

  }
//WHEN EDIT BUTTON IS CLICKED
  editBtn = (event) => {
    let x = event.target.id
    let arrId = this.objCommunity.communityArr[x].id
    console.log ('arrId', arrId)
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

  newSubmit = (event) => {

    let locInput = document.getElementById('locationInput').value
    let latInput = Number(document.getElementById('latitudeInput').value)
    let longInput = Number(document.getElementById('longitudeInput').value)
    let popInput = Number(document.getElementById('populationInput').value)

    this.setState({counter: this.state.counter + 1})
    this.objCommunity.addCity(locInput, latInput, longInput, popInput)


  }

  reRender = () => {this.setState({refresh: !this.state.refresh})}

  render() {

      let city = this.objCity

    return(
      <div className = 'commCityComp'>
        <h1>Cities and Communities</h1>
        <CitySummaries
          passObjCommunity = {this.objCommunity}/>
        <div>
          <RenderingTable
            passObjCommunity = {this.objCommunity}
            passNewSubmit = {this.newSubmit}
            passDeleteBtn = {this.deleteBtn}
            passEditBtn = {this.editBtn}
          />
        </div>
        <div>
          {this.state.displayEditWindow ?
            <EditWindow
              passObjComm = {this.objCommunity}
              passCommArr = {this.objCommunity.communityArr[this.state.editId]}
              passEditIdState = {this.state.editId}
              passCloseEditWindow = {this.closeEditWindow}
              passCounter = {this.state.counter}
              passReRender = {this.reRender}
              passArrIdState = {this.state.arrId}/>
               : null}
        </div>

      </div>
    )
  }

}


export default CommCityComp
