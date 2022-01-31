import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { Logo } from '../../SvgIcons';

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`py-10 flex items-center justfiy-cneter flex-col ${
        darkMode ? 'bg-darkCard' : 'bg-grayBg'
      }`}
    >
      <Logo height='64px' />
      <p className='text-center text-14 font-light text-gray'>
        Copyrights &copy; {new Date().getFullYear()} Salik Imtiaz All Rights
        Reserved.
      </p>
    </div>
  );
}

export default Footer;
