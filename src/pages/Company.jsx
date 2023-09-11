import { Outlet } from 'react-router-dom';
import Aside from '../components/aside/Aside';
import Count from '../components/Count';
const Company = () => {
  return (
    <div className="app">
      <div className="w-5/6 mx-auto ">
        <div className="w-full h-screen flex gap-5  ">
          <Aside />
          <div className="flex-grow">
            <Count serCount="21" orderCount="21" />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
