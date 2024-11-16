import React, { useState } from 'react'
import { TodoContextdata } from './store/Store'
import { useContext } from 'react'
function ToDoList() {
    const { items, DeleteItems } = useContext(TodoContextdata);
    return (

        <div className="list-container container">{
            items.map((item, index) => {
                return <>
                    <div className="List">
                        <li id={index} key={index}>{item}</li>
                        <p><i class="fa-solid fa-trash" onClick={() => DeleteItems(index)}></i></p>
                
                    </div>
                </>

            })}

        </div>)
}

export default ToDoList