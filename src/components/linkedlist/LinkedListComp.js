import React from 'react'
import LinkedListCtrlClass from './LinkedListCtrlClass'
import NodeClass from './NodeClass'
import './linkedListStyling.css'

class LinkedListComp extends React.Component {
  constructor() {
    super()
      this.objLinkedListCtrl = new LinkedListCtrlClass
      this.objNodeClass = new NodeClass
      this.state = {
      display:'',
    }
}

  create = () => {
    let subjectInput = document.getElementById('subjectInput').value
    let amountInput = Number(document.getElementById('amountInput').value)
    if(subjectInput === '' || amountInput === '') {
      alert('Please Enter The Information')
    } else {
     this.objLinkedListCtrl.insert(subjectInput, amountInput)
     this.showData()
   }
  }

  showData = () => {
    if (this.objLinkedListCtrl.length === 0) {
      return this.setState({display: ''})
    } else {
      this.setState({display: this.objLinkedListCtrl.position.show()})
    }
  }

  clickHandler = (event) => {
    let x = event.target.id

    if(this.objLinkedListCtrl.length !== 0){
        switch(x) {
          case 'first':
            this.objLinkedListCtrl.first()
            this.showData()
            break
          case 'previous':
            this.objLinkedListCtrl.previous()
            this.showData()
            break
          case 'delete':
            this.objLinkedListCtrl.delete()
            this.showData()
            break
          case 'next':
            this.objLinkedListCtrl.next()
            this.showData()
            break
          case 'last':
            this.objLinkedListCtrl.last()
            this.showData()
            break
          default:
            return null
        }
      } else {
        return
      }
}




  render() {
    return(
      <div className = 'linkedListContainer'>
        <h1>Linked List</h1>
        <div className = 'menu'>
          <input id = 'subjectInput' type = 'text' placeholder = 'Enter Subject' /><br />
          <input id = 'amountInput' type = 'number' placeholder = 'Enter Amount' /><br />
          <button onClick = {this.create}>Create</button>
        </div>
        <div className = 'navMenu'>
          <button id = 'first' onClick = {this.clickHandler}>{'|<'}</button>
          <button id = 'previous' onClick = {this.clickHandler}>{'<'}</button>
          <button id = 'delete' onClick = {this.clickHandler}>Delete</button>
          <button id = 'next' onClick = {this.clickHandler}>{'>'}</button>
          <button id = 'last' onClick = {this.clickHandler}>{'>|'}</button>
        </div>
        <div className = 'showLinkList'>
          <h4>{this.state.display}</h4>
        </div>
      </div>
    )
  }
}

export default LinkedListComp
