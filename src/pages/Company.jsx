import { Outlet } from 'react-router-dom';
import Aside from '../components/aside';
import DashHeader from '../components/dashboardHeader';

const Company = () => {
  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900`}>
      <Aside />
      <div className="flex flex-col flex-1">
        <DashHeader />
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Company;
