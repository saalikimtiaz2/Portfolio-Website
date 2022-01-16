import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../Navigation/Header';

function Layout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-screen ${darkMode ? 'bg-darkBg' : 'bg-white'}`}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
