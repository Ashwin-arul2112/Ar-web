import React from "react"
import { Routes, Route } from "react-router-dom"
import ARPage from "./pages/ARPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ARPage />} />
    </Routes>
  )
}

export default App