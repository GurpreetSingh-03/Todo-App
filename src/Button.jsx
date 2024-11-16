import React from 'react'
import { TodoContextdata } from './store/Store'
import { useContext } from 'react'
function Button() {
    const {AddToDo} = useContext(TodoContextdata)
  return (
    <button type="submit" onClick={AddToDo}>+</button>
  )
}

export default Button