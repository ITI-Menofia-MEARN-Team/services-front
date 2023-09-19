import { Link } from 'react-router-dom';

const AuthenticationButtons = () => {
  const linkStyle = 'rounded border border-purple-600 px-6 py-1 font-medium focus:outline-none';

  return (
    <div className="auth-buttons flex justify-center items-center gap-5">
      <Link
        to={'/login'}
        className={`${linkStyle} bg-purple-600 text-white dark:hover:bg-gray-900 hover:bg-white dark:hover:text-white hover:text-purple-600  active:text-purple-600`}
      >
        دخول
      </Link>
      <Link
        to={'/register'}
        className={`${linkStyle} bg-white text-purple-600 dark:text-white hover:bg-purple-600 hover:text-white dark:bg-gray-900 dark:hover:bg-purple-600 active:bg-purple-600`}
      >
        تسجيل
      </Link>
    </div>
  );
};

export default AuthenticationButtons;
