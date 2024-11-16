import React from 'react'
import { TodoContextdata } from './store/Store'
import { useContext } from 'react'
function ToDoList() {
    const {items,DeleteItems}= useContext(TodoContextdata);
  return (

  
    items.map((item, index)=>{
        return <li id ={index} key={index} onClick={()=>DeleteItems(index)}>{item}</li>
        
      })
  )
}

export default ToDoList