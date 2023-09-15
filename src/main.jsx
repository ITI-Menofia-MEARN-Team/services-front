import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import userRouter from './routers/userRouter.jsx';
import companyRouter from './routers/companyRouter.jsx';
import guestRouter from './routers/guestRouter.jsx';
import DarkModeProvider from './contexts/DarkMode.jsx';
import { AuthProvider } from './contexts/Auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AuthProvider>
  </React.StrictMode>
);
