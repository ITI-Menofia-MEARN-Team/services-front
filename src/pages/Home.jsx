import Header from '../components/header';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <div className="min-h-[90.8vh] bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
