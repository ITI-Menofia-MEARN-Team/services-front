import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider, DarkModeProvider } from './contexts';
import { BrowserRouter } from 'react-router-dom';
import MenuProvider from './contexts/Menu.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <MenuProvider>
            <App />
          </MenuProvider>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  </React.StrictMode>
);
