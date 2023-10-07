import React, { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../contexts/Menu';
import { XIcon } from '@heroicons/react/solid';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts';
import ProfileMenu from './ProfileMenu';
import AuthenticationButtons from './AuthenticationButtons';
import Categories from './Categories';

const Menu = () => {
    // menu
    const { isMenu, toggleMenu } = useContext(MenuContext);

    // user
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.user?.role) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    }, [user]);




    const isActiveLink = ({ isActive }) => {
        return `hover:text-purple-600 hover:dark:text-purple-300 transition text-lg relative ${isActive
            ? 'font-bold text-purple-600 dark:text-purple-300  before:absolute before:top-[120%] before:w-full before:h-1 before:dark:bg-purple-300 before:bg-purple-600 '
            : 'text-gray-900 dark:text-white  '
            }`;
    };




    return (
        <div className={`fixed h-screen md:w-[50vw] w-screen z-50 top-0 px-10 right-0 bg-purple-50 0	dark:bg-gray-900 shadow-lg ${isMenu ? 'block' : 'hidden'}`}>
            <button onClick={toggleMenu}>
                <XIcon className="absolute top-5 left-10 w-10 h-10 text-red-600" />
            </button>
            <div className="mt-10 ml-5">

                <nav className="mt-5">
                    <ul className='flex flex-col gap-10'>
                        <li onClick={toggleMenu}>
                            <NavLink className={isActiveLink} to={'/'}>
                                تصفح
                            </NavLink>
                        </li>
                        <li onClick={toggleMenu}>
                            <NavLink className={isActiveLink} to={'/join-request'}>
                                طلب الانضمام
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* auth */}
                <div className="block md:hidden mt-10">{isLoggedIn ? (
                    <>
                        {/* <!-- Profile menu --> */}
                        <div className="relative">
                            <ProfileMenu />
                        </div>
                    </>
                ) : (
                    <AuthenticationButtons />
                )}
                </div>

            </div>
        </div>
    );
};

export default Menu;
