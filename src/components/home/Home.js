import React from 'react'
import logo from '../.././logo.svg'
import '../.././App.css'
class Home extends React.Component {
  render(){
    return(
      <div className = 'homeComp'>
        <img src = {logo} className = 'App-logo' alt = 'logo'/>
      </div>
    )
  }
}


export default Home
