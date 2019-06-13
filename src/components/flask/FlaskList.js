import React from 'react'
import '../.././App.css'
class FlaskList extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const url = 'http://127.0.0.1:5000/react'
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({data:data}))
  }


  render(){
    let list 
    list = this.state.data.map((a, b) => 
      <ul key={b}>
        <li>{a.customer_name}, {a.address}</li>
      </ul>
    )
    console.log('list', list)
    return(
      <div className = 'flaskList'>
        <h4>Comp 240</h4>
        {list}
      </div>
    )
  }
}


export default FlaskList
