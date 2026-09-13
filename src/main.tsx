import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tldraw/tldraw.css';
import './styles.css';
import { Canvas } from './Canvas';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Canvas /></React.StrictMode>);