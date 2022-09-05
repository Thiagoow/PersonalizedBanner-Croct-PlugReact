import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SetPersona from './pages/SetPersona'
import Home from './pages/Home'

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SetPersona />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </Router>
    </>
  )
}
