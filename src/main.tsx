import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import './styles.css'

function App() {
  useEffect(() => {
    document.title = 'CanvasForge'
  }, [])

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">CanvasForge</div>
        <div className="status">Private workspace · Phase 1</div>
      </header>
      <section className="canvas-shell" aria-label="CanvasForge infinite canvas">
        <Tldraw persistenceKey="canvasforge-local" />
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
