import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import userRouter from './routers/userRouter.jsx';
import companyRouter from './routers/companyRouter.jsx';
import guestRouter from './routers/guestRouter.jsx';
import DarkModeProvider from './contexts/DarkMode.jsx';

// user roles => ["User","Company","Admin"]
// guest : User Without Any Credits/Authentictions
// user : User With Credits/Authentictions
// admin : User With Credits/Authentictions And Cant Manage Web Site
// Company : Company With Credits/Authentictions

const user = 'User';
let router = userRouter;
if (user === 'User') router = userRouter;
else if (user === 'Company') router = companyRouter;
// else "Admin"
else router = guestRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
