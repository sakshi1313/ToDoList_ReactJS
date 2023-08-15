import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './ToDoList'
import Navbar from "./Navbar"


function App() {

  return (
    <>
      <CssBaseline/>
      <Navbar/>
    
      <h1>Todo</h1>
      <TodoList/>
      
    </>
  )
}

export default App
