import React from 'react'
import App from './App'
import { useState } from 'react';
import { TodoContextdata } from './store/Store';
import Input from './Input';

function Provider() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [Error, setError] = useState("");

  const itemEvent = (event) => {
    setInput(event.target.value);
  }

  const AddToDo = () => {
    if (inputText.trim() === "") {
      setError("Nothing to add");
      return;

    }
    setItems((oldItems) => {
      return [...oldItems, inputText];
    });

    setInput('');
    setError("");
  }

  const DeleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((el, index) => index !== id);  // Corrected: filter now returns a boolean value
    });
  };
  
  

    return (
      <TodoContextdata.Provider value={{ inputText,DeleteItems, itemEvent, AddToDo, setInput, items, setItems, Error, setError }}>
        <App />
      </TodoContextdata.Provider>
    )
  
}

export default Provider