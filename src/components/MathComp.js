import React, { Component } from 'react'
import Maths from './math'
import './../App.css'

export default class MathComp extends Component {

  state = {
    firstNum:'',
    secondNum: '',
    resultNum: 0,
  }

  settingState = (event) => {
    const { name, value } = event.target
    this.setState({ [name] : value })
  }

  maths = (event) => {
    let x, a , b
      x = event.target.name
      a = Number(this.state.firstNum)
      b = Number(this.state.secondNum)

    switch(x){
    case 'add':
      this.setState({resultNum: Maths.sum(a, b)})
      break

    case 'subtract':
      this.setState({resultNum: Maths.subtract(a, b)})
      break

    case 'multiply':
      this.setState({resultNum: Maths.multiply(a, b)})
      break

    case 'divide':
      this.setState({resultNum: Maths.divide(a, b)})
      break

    default:
      console.log('wat')
    }
  }

  render(){

    return (
      <form className = 'calculator'>
        <h1 className = 'calcTitle'>From MathComp</h1>

        <input className = 'input1' type = 'number' name = 'firstNum' value = {this.state.firstNum} onChange = {this.settingState} />
        <input className = 'input2' type = 'number' name = 'secondNum' value = {this.state.secondNum} onChange = {this.settingState} />

        <div className = 'btn'>
        <button type = 'button' name = "add" onClick = {this.maths}>+</button>
        <button type = 'button' name = "subtract" onClick = {this.maths}>-</button>
        <button type = 'button' name = "multiply" onClick = {this.maths}>*</button>
        <button type = 'button' name = "divide" onClick = {this.maths}>/</button>
        </div>

        <h1>{this.state.resultNum}</h1>

      </form>
    )
  }
}
