import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import DashHeader from '../components/AdminHeader';

const LayoutCompany = () => {
  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900`}>
      <Aside />
      <div className="flex flex-col flex-1">
        <DashHeader />
        <main className="h-full pb-16 overflow-y-scroll scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
          <div className="container px-6 mx-auto grid ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutCompany;
