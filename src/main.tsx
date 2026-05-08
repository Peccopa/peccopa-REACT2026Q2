import { createRoot } from 'react-dom/client';

import App from '@/app/App';
import { TEXTS } from '@/shared';

import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error(TEXTS.error.main);

createRoot(root).render(<App />);
