import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SetPersona from './pages/SetPersona'

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/setPersona" element={<SetPersona />} exact />
        </Routes>
      </Router>
    </>
  )
}
