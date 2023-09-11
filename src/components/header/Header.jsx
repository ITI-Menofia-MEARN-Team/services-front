import { useState } from 'react';
import AuthenticationButtons from './AuthenticationButtons';
import UserInfo from './UserInfo';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderUserInfo = () => {
    if (isLoggedIn) {
      return <UserInfo />;
    }
    return <AuthenticationButtons />;
  };

  const isActiveLink = ({ isActive }) => {
    return `text-20 font-bold ${isActive ? ' text-primary' : '	text-gray-600'}`;
  };

  return (
    <div className="w-full bg-gray-300 h-[10vh]">
      <div className="w-5/6 mx-auto h-full">
        <div className="h-full flex justify-between items-center">
          <h3 className="text-xl font-bold">لوجو</h3>
          <ul className="flex justify-between items-center gap-8">
            <li>
              <NavLink to={'/'} className={isActiveLink}>
                الخدمات
              </NavLink>
            </li>
            <li>
              <NavLink to={'/join-request'} className={isActiveLink}>
                طلب الانضمام
              </NavLink>
            </li>
            <li>
              <NavLink to={'/test'} className={isActiveLink}>
                تست
              </NavLink>
            </li>
          </ul>
          {renderUserInfo()}
        </div>
      </div>
    </div>
  );
};

export default Header;
