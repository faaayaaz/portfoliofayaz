import React from 'react'; // ✅ (You need to import React for JSX)
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode> {/* ✅ Optional but recommended for best practices */}
    <BrowserRouter basename="/portfoliofayaz/"> {/* ✅ Correct Router setup */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
