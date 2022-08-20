/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Nav";

function Layout({ children }) {
  const { darkMode } = useContext(ThemeContext);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main
      className={`min-h-screen w-screen ${
        darkMode ? "bg-darkBg text-white" : "bg-white text-darkBg"
      }`}
    >
      <Navbar />
      <Header />
      {children}
      {showButton && (
        <button
          className="backToTop shadow-lg hover:shadow-xl bg-opacity-50"
          onClick={handleScrollToTop}
        >
          <img src="/assets/icons/btt.svg" className="h-12" alt="" />
          <span>Back to Top</span>
        </button>
      )}
      <Footer />
    </main>
  );
}

export default Layout;
