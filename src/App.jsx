import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet, Link } from 'react-router-dom'
//import axios from 'axios'

const App = ({page}) => {

  const handleRegisteration = (e) => {
    e.preventDefault()
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
