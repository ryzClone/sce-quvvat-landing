import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/global.css'; // global CSS ulanishi
import './i18n/i18n.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
