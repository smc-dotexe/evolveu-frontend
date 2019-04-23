import React from 'react'
import CityClass from './CityClass'
import CommunityClass from './CommunityClass'
import './commCityStyling.css'

class CommCityComp extends React.Component {
  constructor() {
    super()
      this.objCity = new CityClass()
      this.objCommunity = new CommunityClass()
  }

  addStuff = () => {
    let locInput = document.getElementById('locationInput').value
    let latInput = document.getElementById('latitudeInput').value
    let longInput = document.getElementById('longitudeInput').value
    let popInput = document.getElementById('populationInput').value
    let editBtn = document.createElement('BUTTON')
    editBtn.textContent = 'edit'

    let x = document.getElementById('table')
    let row = x.insertRow(-1)

    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)

    let i
    for (i = 0; i < this.objCommunity.communityArr.length; i++){}


    this.objCommunity.addCity(i, locInput, latInput, longInput, popInput)
    console.log(this.objCommunity.communityArr)
    let obj = this.objCommunity.communityArr
      cell1.textContent=obj[i].name
      cell2.textContent=obj[i].latitude
      cell3.textContent=obj[i].longitude
      cell4.textContent=obj[i].population
      cell5.appendChild(editBtn)


  }
  render() {
      let city = this.objCity
    return(
      <div className = 'commCityComp'>
        <h1>Hello from CommCityComp</h1>
        <table id = 'table'>
          <tbody>
            <tr>
              <td><input type = 'text' id = 'locationInput' placeholder = 'Enter Location Name' /></td>
              <td><input type = 'number' id = 'latitudeInput' placeholder = 'Latitude'/></td>
              <td><input type = 'number' id = 'longitudeInput' placeholder = 'Longitude'/></td>
              <td><input type = 'number' id = 'populationInput' placeholder = 'Population'/></td>
              <td><button type = 'button' onClick = {this.addStuff}>Submit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}


export default CommCityComp
