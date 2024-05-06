import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import UserPage from './Components/Lobby'
import Error404 from './Components/Error404'
import MeetingRoom from './Components/MeetingRoom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' Component={Error404} />
        <Route path='/' Component={LoginPage}/>
        <Route path='/login/:username' Component={UserPage}/>
        <Route path='/meeting/:roomid' Component={MeetingRoom}/>
      </Routes>
    </>
  )
}

export default App
