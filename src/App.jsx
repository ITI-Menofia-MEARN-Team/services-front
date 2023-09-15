import { useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { DarkModeContext } from './contexts/DarkMode';
import Spinner from './components/spinner';
import { AuthContext } from './contexts/Auth';
import userRouter from './routers/userRouter';
import companyRouter from './routers/companyRouter';
import guestRouter from './routers/guestRouter';

// user roles => ["User","Company","Admin"]
// guest : User Without Any Credits/Authentictions
// user : User With Credits/Authentictions
// admin : User With Credits/Authentictions And Cant Manage Web Site
// Company : Company With Credits/Authentictions

function App() {
  // dark mode context
  const { isDarkMode } = useContext(DarkModeContext);

  // which Router based on User that did log in
  const { user } = useContext(AuthContext);
  console.log('user: ', user);
  const [router, setRouter] = useState(guestRouter);

  useEffect(() => {
    if (user?.user?.role === 'User') setRouter(userRouter);
    else if (user?.user?.role === 'Company') setRouter(companyRouter);
    // else "Admin"
    else setRouter(guestRouter);
  }, [user]);

  // jsx
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} font-cairo bg-gray-50 dark:bg-gray-900`}>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </div>
  );
}

export default App;
