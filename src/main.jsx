import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import ErrorPage from './components/Errors/ErrorPage'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  (<BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="rank" element={<Rank/>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>),
  document.getElementById('root')
)
