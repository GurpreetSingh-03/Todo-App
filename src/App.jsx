import React, { useState } from 'react'
import { useContext } from 'react';
import { TodoContextdata } from './store/Store';
import Logo from './Logo';
import Input from './Input';
import Button from './Button';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const { Error} = useContext(TodoContextdata);


  return (
    <div className="main">
      <div className="content">
        <Logo/>
        <Input/>
        <p className='alert' style={{color: 'red'}}>{Error}</p>
        <ol>
          
        <ToDoList/>
          
        </ol>
      </div>
    </div>
  )
}

export default App
