import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/initScreens/Login'
import SignUp from './components/initScreens/SignUp'
import ForgotPassword from './components/initScreens/ForgotPassword'

function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
