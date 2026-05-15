import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from '@/app/App';

import { TEXTS } from '@/shared';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error(TEXTS.error.main);

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
