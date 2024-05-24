import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import ThemeProvider from './components/ui/ThemeProvider.jsx';
import { QuizProvider } from './context/QuizContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <ThemeProvider defaultTheme='dark'>
        <App />
      </ThemeProvider>
    </QuizProvider>
  </React.StrictMode>
);
