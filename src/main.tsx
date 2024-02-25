import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { ToDoApp } from './components/ToDoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToDoApp/>
  </React.StrictMode>,
)
