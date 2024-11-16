import React from 'react'
import { TodoContextdata } from './store/Store'
import { useContext } from 'react'
import Button from './Button';

function Input() {
    const { inputText, itemEvent } = useContext(TodoContextdata);
    return (
        <>
        <div className="input-container  container">
            <div className="input">
                <input type="text" placeholder='Type ToDo' value={inputText} onChange={itemEvent}>
                </input>
            </div>
            <div className="btn"><Button /></div>
            </div>
        </>)
}

export default Input