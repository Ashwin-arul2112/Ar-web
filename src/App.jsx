import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ARPage from "./pages/ARPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ar" element={<ARPage />} />
    </Routes>
  )
}

export default App