import React, { useEffect, useRef, useState } from "react"

function ARPage() {
  const containerRef = useRef(null)
  const unityRef = useRef(null)
  const [status, setStatus] = useState("Loading Unity...")

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/unity/Build/WebGL_Builds.loader.js"

    script.onload = async () => {
      try {
        unityRef.current =
          await window.createUnityInstance(
            containerRef.current,
            {
              dataUrl: "/unity/Build/WebGL_Builds.data",
              frameworkUrl: "/unity/Build/WebGL_Builds.framework.js",
              codeUrl: "/unity/Build/WebGL_Builds.wasm",
              companyName: "AR",
              productName: "Viewer",
              productVersion: "1.0"
            }
          )

        window.unityInstance = unityRef.current
        setStatus("Unity Loaded")
      } catch (err) {
        console.error(err)
        setStatus("Unity Load Failed")
      }
    }

    document.body.appendChild(script)

    return () => {
      unityRef.current?.Quit()
    }
  }, [])

  const startAR = () => {
    window.unityInstance?.SendMessage(
      "XRManager",
      "StartAR"
    )
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 20,
          background: "#000",
          color: "#fff",
          padding: "5px"
        }}
      >
        {status}
      </div>

      <button
        onClick={startAR}
        style={{
          position: "absolute",
          top: 60,
          left: 10,
          zIndex: 20
        }}
      >
        Enter AR
      </button>

      {/* IMPORTANT: Unity must load inside DIV */}
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: "100vh"
        }}
      />
    </>
  )
}

export default ARPage