import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Logo } from "../../SvgIcons";
import Styles from "./styles.module.scss";

function Header() {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="xs:px-6 lg:px-20 py-3 w-screen">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-6">
          <Link href="/">
            <Logo height="44px" />
          </Link>
        </div>

        <div className="xs:col-span-0 lg:col-span-6 xs:hidden lg:block flex justify-end">
          <ul
            className={`${Styles.navList} ${
              darkMode ? "text-gray" : "text-black"
            }`}
          >
            <li>
              <Link href="/#about" passHref>
                <button>
                  About<span>.</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/#work" passHref>
                <button>
                  Work<span>.</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/#contact" passHref>
                <button>
                  Contact<span>.</span>
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleMode}
                className={`flex items-center gap-2 text-12 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <img
                  src={
                    darkMode
                      ? "/assets/icons/light.svg"
                      : "/assets/icons/dark.svg"
                  }
                  alt=""
                  className="theme-icon"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="xs:col-span-6 lg:col-span-0 xs:block lg:hidden ">
          <button
            onClick={toggleMode}
            className={`flex items-center gap-2 text-12 ml-auto ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <img
              src={
                darkMode ? "/assets/icons/light.svg" : "/assets/icons/dark.svg"
              }
              alt=""
              className="theme-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
