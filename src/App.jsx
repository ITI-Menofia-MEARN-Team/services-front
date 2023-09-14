import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { DarkModeContext } from './contexts/DarkMode';
import Spinner from './components/spinner';

function App({ router }) {
  // dark mode context
  const { isDarkMode } = useContext(DarkModeContext);

  // jsx
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} font-cairo bg-gray-50 dark:bg-gray-900`}>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </div>
  );
}

export default App;
