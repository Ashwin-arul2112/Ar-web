import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ARPage from "./pages/ARPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ar" element={<ARPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App