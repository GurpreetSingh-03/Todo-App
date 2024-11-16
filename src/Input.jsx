import React from 'react'
import { TodoContextdata } from './store/Store'
import { useContext } from 'react'

function Input() {
    const {inputText, itemEvent}= useContext(TodoContextdata);
  return (
    <input type="text" placeholder='Type ToDo' value={inputText} onChange={itemEvent}></input>
  )
}

export default Input