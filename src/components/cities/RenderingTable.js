import React from 'react'
import CommunityClass from './CommunityClass'

class RenderingTable extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log('rendering table: ', this.props.passObjCommunity)
    let create
    create = this.props.passObjCommunity.communityArr.map((y, z) =>

      <tr key = {z}>
        <td>{y.name}</td>
        <td>{y.latitude}</td>
        <td>{y.longitude}</td>
        <td>{y.population}</td>
        <td><button type = 'button' id = {z} onClick = {this.props.passEditBtn}>Edit</button></td>
        <td><button type = 'button' id = {z} onClick = {this.props.passDeleteBtn}>Delete</button></td>
      </tr>

    )


    return(
    <div className = 'renderingTableComp'>
      <table id = 'table'>
        <tbody>
          <tr>
            <td><h4>Location</h4></td>
            <td><h4>Latitude</h4></td>
            <td><h4>Longitude</h4></td>
            <td><h4>Population</h4></td>
          </tr>
          <tr>
            <td><input type = 'text' id = 'locationInput' placeholder = 'Enter Location Name' /></td>
            <td><input type = 'number' id = 'latitudeInput' placeholder = 'Latitude'/></td>
            <td><input type = 'number' id = 'longitudeInput' placeholder = 'Longitude'/></td>
            <td><input type = 'number' id = 'populationInput' placeholder = 'Population'/></td>
            <td><button type = 'button' onClick = {this.props.passNewSubmit}>Submit</button></td>
          </tr>
          {create}
        </tbody>
      </table>
    </div>

    )

  }
}



export default RenderingTable
