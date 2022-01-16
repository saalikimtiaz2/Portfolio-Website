import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { useState, useEffect } from 'react';
import { Logo } from '../../SvgIcons';
import Styles from './styles.module.scss';

function Header() {
  const { darkMode, toggleMode } = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, []);
  return (
    <div
      className={`fixed xs:px-6 lg:px-20 py-2 z-50 w-screen ${
        navbar ? `shadow-xl ${darkMode ? 'bg-darkCard' : 'bg-white'}` : ''
      }`}
    >
      <div className='grid grid-cols-12 items-center'>
        <div className='col-span-6'>
          <Link href='/' className={`${navbar ? 'xs:mx-auto' : ''}`}>
            <Logo height='64px' />
          </Link>
        </div>

        <div className='xs:col-span-0 lg:col-span-6 xs:hidden lg:block flex justify-end'>
          <ul
            className={`${Styles.navList} ${
              darkMode ? 'text-gray' : 'text-black'
            }`}
          >
            <li>
              About<span>.</span>
            </li>
            <li>
              Work<span>.</span>
            </li>
            <li>
              Contact<span>.</span>
            </li>
            <li>
              <button
                onClick={toggleMode}
                className={`flex items-center gap-2 text-12 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
              >
                <img
                  src={
                    darkMode
                      ? '/assets/icons/light.svg'
                      : '/assets/icons/dark.svg'
                  }
                  alt=''
                  className='theme-icon'
                />
              </button>
            </li>
          </ul>
        </div>
        <div className='xs:col-span-6 lg:col-span-0 xs:block lg:hidden '>
          <button
            onClick={toggleMode}
            className={`flex items-center gap-2 text-12 ml-auto ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <img
              src={
                darkMode ? '/assets/icons/light.svg' : '/assets/icons/dark.svg'
              }
              alt=''
              className='theme-icon'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
