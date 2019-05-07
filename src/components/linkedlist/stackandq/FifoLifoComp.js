import React from 'react'
import StackClass from './StackClass'
import QClass from './QClass'

class FifoLifoComp extends React.Component {
  constructor() {
    super()
      this.instStackClass = new StackClass()
      this.instQClass = new QClass()

      this.state = {
        displayLifoArr:'',
        displayFifoArr:'',
      }
  }

  handler = (event) => {
    let x = event.target.id
    let y = document.getElementById('lifoInput').value
    let z = document.getElementById('fifoInput').value

    switch(x) {
      case 'push':
         this.instStackClass.add(y)
         this.arrLifoState()
        break
      case 'pop':
         this.instStackClass.pop()
         this.arrLifoState()
        break
      case 'fifoPush':
         this.instQClass.add(z)
         this.arrFifoState()
        break
      case 'remove':
          this.instQClass.remove()
          this.arrFifoState()
        break
      default:
        return null
    }
  }

  arrLifoState = () => {
    if (this.instStackClass.arr.length === 0) {
      this.setState({displayLifoArr:''})
    } else {
      let lifoSpaces = this.instStackClass.arr.join(' ')
      this.setState({
        displayLifoArr: lifoSpaces
      })
    }
  }

  arrFifoState = () => {
    if (this.instQClass.qArr.length === 0) {
      this.setState({displayFifoArr:''})
    } else {
      let fifoSpaces = this.instQClass.qArr.join(' ')
      this.setState({
        displayFifoArr: fifoSpaces
      })
    }
  }

  render() {
    return(
      <div>
        <div className = 'lifo'>
          <h4>Lifo/Stack</h4>
          <input id = 'lifoInput' type = 'text' placeholder = 'Lifo'/>
          <button id = 'push' onClick = {this.handler}>Push</button>
          <button id = 'pop' onClick = {this.handler}>Pop</button>
          <p>{this.state.displayLifoArr}</p>
        </div>
        <div className = 'fifo'>
          <h4>Fifo/Queue</h4>
          <input id = 'fifoInput' type = 'text' placeholder = 'Fifo'/>
          <button id = 'fifoPush' onClick = {this.handler}>Push</button>
          <button id = 'remove' onClick = {this.handler}>Shift</button>
          <p>{this.state.displayFifoArr}</p>
        </div>
      </div>

    )
  }
}

export default FifoLifoComp
