
import React from 'react'
import Navbar from './components/Navbar'
import ProfilesBox from './components/ProfilesBox'
import Modal from './components/Modal'

const App = () => {

  const handleSubmition = (e) => {
    e.preventDefault()

    const newUser = {
      fname: e.target.first.value,
      lname: e.target.last.value,
      email: e.target.email.value,
      picture: e.target.picture.value,
      bio: e.target.bio.value,
      city: e.target.city.value,
      social: {
        github: e.target.github.value,
        twitter: e.target.twitter.value,
        discord: e.target.discord.value,
        telegram: e.target.telegram.value,
      },
    }

    // let it be the localhost for now, just for testing.
    const addUser = async (user) => {
      await axios.post('http://localhost:5000/users/add', user)
    }

    addUser(newUser)
  }

  return (
    <React.Fragment>
      <Navbar />
      <Modal handleSubmition={handleSubmition}/>
      <ProfilesBox />
    </React.Fragment>
  )
}

export default App
