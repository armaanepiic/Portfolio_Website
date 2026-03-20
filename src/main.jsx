// main.jsx
// Vite React entry point — mounts the App into the DOM.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // <-- Global styles live here
import App from './App.jsx';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
