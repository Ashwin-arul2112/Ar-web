import { QRCodeCanvas } from "qrcode.react"
import React from "react"

function Home() {

  const arUrl = `${window.location.origin}/ar`

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Scan to Open AR</h1>

      <QRCodeCanvas
        value={arUrl}
        size={200}
      />

      <p>{arUrl}</p>
    </div>
  )
}

export default Home