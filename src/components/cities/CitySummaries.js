import React from 'react'

class CitySummaries extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <li>Total Population: {this.props.passObjCommunity.getPopulation()}</li>
          <li>Most Northern Location: {this.props.passObjCommunity.getMostNorthern()}</li>
          <li>Most Southern Location: {this.props.passObjCommunity.getMostSouthern()}</li>
        </ul>
      </div>
    )
  }

}

export default CitySummaries
