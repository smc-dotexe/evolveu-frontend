import React from 'react'

class CitySummaries extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul id = 'citySummUl'>
          <li className = 'citySummLi'>Total Population: {this.props.passObjCommunity.getPopulation()}</li>
          <li className = 'citySummLi'>Most Northern Location: {this.props.passObjCommunity.getMostNorthern()}</li>
          <li className = 'citySummLi'>Most Southern Location: {this.props.passObjCommunity.getMostSouthern()}</li>
        </ul>
      </div>
    )
  }

}

export default CitySummaries
