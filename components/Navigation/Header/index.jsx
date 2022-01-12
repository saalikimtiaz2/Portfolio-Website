import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { useState, useEffect } from 'react';
import { Logo } from '../../SvgIcons';

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
            <Logo height='52px' fill='#f9c519' />
          </Link>
        </div>
        <div className='col-span-6 justify-end'>
          <button onClick={toggleMode}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
