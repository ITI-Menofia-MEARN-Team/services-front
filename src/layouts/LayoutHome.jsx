import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function LayoutHome() {
  return (
    <>
      <Header />
      <div className="min-h-[90.8vh] bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </div>
    </>
  );
}

export default LayoutHome;
