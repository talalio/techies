import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  (<BrowserRouter>
    <Routes>
      <Route path="/" element={<App page="Home"/>}/>
      <Route path="login" element={<App page="Login"/>}/>
      <Route path="register" element={<App page="Register"/>}/>
      <Route path="rank" element={<App page="Rank"/>}/>
    </Routes>
  </BrowserRouter>),
  document.getElementById('root')
)
