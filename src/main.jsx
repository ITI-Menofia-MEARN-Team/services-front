import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import userRouter from './routers/userRouter.jsx';
import companyRouter from './routers/companyRouter.jsx';
import guestRouter from './routers/guestRouter.jsx';

// user roles => ["User","Company","Admin"]
const user = 'Company';
let router = userRouter;
if (user === 'User') router = userRouter;
else if (user === 'Company') router = companyRouter;
// else "Admin"
else router = guestRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
