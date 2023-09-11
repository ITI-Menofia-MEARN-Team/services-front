import { Link } from 'react-router-dom';

const AuthenticationButtons = () => {
  const linkStyle = 'rounded border border-primary px-8 py-2 font-medium focus:outline-none';

  return (
    <div className="auth-buttons flex justify-center items-center gap-5">
      <Link
        to={'/login'}
        className={`${linkStyle} bg-primary text-white hover:bg-transparent hover:text-primary  active:text-primary`}
      >
        دخول
      </Link>
      <Link
        to={'/register'}
        className={`${linkStyle} bg-white text-primary hover:bg-primary hover:text-white  active:bg-primary`}
      >
        تسجيل
      </Link>
    </div>
  );
};

export default AuthenticationButtons;
