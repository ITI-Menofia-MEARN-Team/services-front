import { useState } from "react";
// import "../../styles/header.css";
import AuthenticationButtons from "./AuthenticationButtons";
import UserInfo from "./UserInfo";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderUserInfo = () => {
    if (isLoggedIn) {
      return <UserInfo />;
    }
    return <AuthenticationButtons />;
  };
  return (
    <div className="w-5/6 mx-auto px-16 py-4 flex justify-between items-center bg-gray-300	">
      <h3 className="text-3xl font-bold">لوجو</h3>
      <ul className="w-40 flex justify-between items-center">
        <li>
          <a href="/" className="text-20 font-bold">
            الخدمات
          </a>
        </li>
        <li>
          <a href="/" className="text-20 font-bold">
            تست
          </a>
        </li>
        <li>
          <a href="/" className="text-20 font-bold">
            تست
          </a>
        </li>
      </ul>
      {renderUserInfo()}
    </div>
  );
};

export default Header;
