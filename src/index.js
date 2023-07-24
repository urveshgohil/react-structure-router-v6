import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import AppRoute from './App';

const reactRoot = document.getElementById('root');
const reactApp = createRoot(reactRoot); // createRoot(reactRoot!) if you use TypeScript
reactApp.render(<AppRoute />);