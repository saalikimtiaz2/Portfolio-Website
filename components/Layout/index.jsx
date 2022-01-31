import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';

function Layout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen w-screen ${
        darkMode ? 'bg-darkBg text-white' : 'bg-white text-darkBg'
      }`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
