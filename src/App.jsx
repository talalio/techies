
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import Footer from './components/Footer/Footer'
//import axios from 'axios'

const App = ({page}) => {

  const pages = {
    Home: (<Home/>),
    Login: (<Login/>),
    Register: (<Register/>),
    Rank: (<Rank/>)
  }

  return (
    <React.Fragment>
      <Navbar />
      {pages[page]}
      <Footer/>
    </React.Fragment>
  )
}

export default App
