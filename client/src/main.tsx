import '@market/web-components/dist/market/market.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineCustomElements } from '@market/web-components/loader';
import App from './App';

async function renderApp() {
  defineCustomElements(window);

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderApp();
