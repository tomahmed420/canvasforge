import React from 'react'
import { createRoot } from 'react-dom/client'
import { CanvasForge } from './CanvasForge'
import './styles.css'
createRoot(document.getElementById('root')!).render(<React.StrictMode><CanvasForge /></React.StrictMode>)