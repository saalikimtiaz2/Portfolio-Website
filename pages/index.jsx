import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Twitter,
  UIUX,
  Developer,
} from '../components/SvgIcons';
import Contact from '../containers/Contact';
import { icons } from '../models';
import Styles from '../styles/home.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // states
  const [hoverUIUX, setHoverUIUX] = useState(false);
  const [hoverDeveloper, setHoverDeveloper] = useState(false);

  // Ref's
  const contactRef = useRef();

  // Ref's Function
  const handleContactScroll = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Salik Imtiaz | Frotend Engineer (React)</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <section>
          <div className='xs:px-4 lg:px-20 pt-4 '>
            <div className='grid grid-cols-12 xs:gap-y-10 lg:gap-10 '>
              <div className='xs:col-span-12 lg:col-span-8 relative lg:pt-72'>
                <img
                  src='/assets/hero.png'
                  alt=''
                  className={Styles.heroImage}
                />
                <h2 className={Styles.title}>
                  Salik Imtiaz
                  <img
                    src='/assets/icons/right-arrow.svg'
                    alt=''
                    className='xs:h-12 lg:h-20'
                  />
                </h2>
              </div>
              <div className='xs:col-span-12 lg:col-span-4 xs:pt-0 lg:pt-10 flex flex-col justify-between gap-y-20'>
                <div>
                  <h3>/ This is me</h3>
                  <h2 className='max-w-20'>
                    Experienced frontend developer remotly from Islamabad,
                    Pakistan.
                  </h2>
                  <p className='max-w-35 mt-8 text-14 text-gray'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quae nemo saepe quas modi excepturi autem?
                  </p>
                  <button
                    onClick={handleContactScroll}
                    className='text-24 text-primary flex items-center gap-4 mt-4 btn btn-right'
                  >
                    Hire Me
                    <img
                      src='/assets/icons/right-arrow.svg'
                      alt=''
                      className='h-4'
                    />
                  </button>
                </div>
                <div className='mx-auto'>
                  <ul className='flex items-center'>
                    <li className='mr-4'>
                      <Linkedin />
                    </li>
                    <li className='mr-4'>
                      <Github />
                    </li>
                    <li className='mr-4'>
                      <Facebook />
                    </li>
                    <li className='mr-4'>
                      <Instagram />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                  </ul>
                  <h3
                    className={`${
                      darkMode ? 'text-darkGray' : 'text-gray'
                    } font-bold normal-case text-center mt-2 mb-0 `}
                  >
                    scroll for more
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={darkMode ? 'bg-darkCard' : 'bg-grayBg'}>
          <div className='xs:px-4 lg:px-0 lg:container lg:mx-auto pt-4 '>
            <div className='grid grid-cols-12 xs:gap-y-20 lg:gap-6 mb-10'>
              <div className='xs:col-span-12 lg:col-span-6 relative'>
                <h2
                  className={`stylishHeading -rotate-10 text-center ${
                    darkMode ? 'text-darkGray' : 'text-gray'
                  }`}
                >
                  Experience.
                </h2>
                <div className='flex items-center justify-evenly mt-4'>
                  <div>
                    <h2 className='text-40 text-primary mb-2'>3+</h2>
                    <h2 className='text-20 max-w-15'>Years of experience.</h2>
                  </div>
                  <div>
                    <h2 className='text-40 text-primary mb-2'>30+</h2>
                    <h2 className='text-20 max-w-10'>Satisfied clients.</h2>
                  </div>
                </div>
              </div>
              <div className='xs:col-span-12 lg:col-span-6'>
                <h3>/ problem solver</h3>
                <h2 className='max-w-45'>
                  Experienced frontend developer remotly from Islamabad,
                  Pakistan.
                </h2>
                <p className='max-w-55 mt-8'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quae nemo saepe quas modi excepturi autem? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Esse quae nemo saepe
                  quas modi excepturi autem?
                </p>
                <a href='/assets/Salik-Resume.pdf' download>
                  <button className='text-24 text-primary flex items-center gap-4 mt-4 btn~ btn-down'>
                    Download Resume
                    <img
                      src='/assets/icons/right-arrow.svg'
                      alt=''
                      className='h-3 rotate-90'
                    />
                  </button>
                </a>
              </div>
            </div>
            <h2
              className={`stylishHeading text-center mt-20 ${
                darkMode ? 'text-darkGray' : 'text-gray'
              }`}
            >
              Expertise.
            </h2>
            <p className='max-w-55 text-center text-gray mx-auto mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
              nemo saepe quas modi excepturi autem.
            </p>
          </div>
          <div className='lg:container lg:mx-auto flex items-center flex-wrap justify-center xs:gap-10 lg:gap-x-20 mt-20'>
            {icons.map((icon) => (
              <div
                className={`${
                  darkMode
                    ? 'hover:bg-darkCard hover:shadow-xl'
                    : 'hover:shadow-md'
                } p-6 gap-4 rounded-md xs:h-28 xs:w-28
                   lg:h-32 lg:w-32 flex flex-col justify-center items-center trasition duration-700 `}
                key={icon.name}
              >
                {darkMode ? (
                  <img src={icon.darkImage} alt='' className='h-16' />
                ) : (
                  <img src={icon.image} alt='' className='h-16' />
                )}
                <p className='text-gray xs:text-12 lg:text-14 text-center'>
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
          <div className='lg:container lg:mx-auto'>
            <div className='grid grid-cols-12 mt-20 xs:gap-4 lg:gap-10 items-center'>
              <div className='xs:col-span-12 lg:col-span-5 p-4'>
                <h2
                  className={`stylishHeading -rotate-10 text-center  ${
                    darkMode ? 'text-darkGray' : 'text-gray'
                  }`}
                >
                  Services.
                </h2>
                <p className='max-w-55 text-gray mt-6 xs:text-center lg:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quae nemo saepe quas modi excepturi autem.
                </p>
              </div>
              <div className='xs:col-span-12 lg:col-span-7 flex flex-wrap items-center gap-6 xs:justify-center lg:justify-end'>
                <div
                  className={`${
                    Styles.card
                  } shadow-md hover:shadow-xl hover:text-white ${
                    darkMode ? 'bg-darkBg' : 'bg-white'
                  }`}
                  onMouseEnter={() => setHoverUIUX(true)}
                  onMouseLeave={() => setHoverUIUX(false)}
                >
                  <div>
                    <UIUX isHover={hoverUIUX} />
                    <h2 className='xs:text-16 lg:text-20 max-w-10 mt-16'>
                      UI/UX Designing
                    </h2>
                    <p
                      className={`${
                        hoverUIUX ? 'text-white' : 'text-gray'
                      } text-12 mt-8 transition duration-500`}
                    >
                      110+ Projects
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    Styles.card
                  } shadow-md hover:shadow-xl hover:text-white ${
                    darkMode ? 'bg-darkBg' : 'bg-white'
                  }`}
                  onMouseEnter={() => setHoverDeveloper(true)}
                  onMouseLeave={() => setHoverDeveloper(false)}
                >
                  <div>
                    <Developer isHover={hoverDeveloper} />
                    <h2 className='xs:text-16 lg:text-20 max-w-10 mt-16'>
                      Frontend Developement
                    </h2>
                    <p
                      className={`${
                        hoverDeveloper ? 'text-white' : 'text-gray'
                      } text-12 mt-8 transition duration-500`}
                    >
                      110+ Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='lg:container lg:mx-auto xs:px-4 lg:px-0'>
            <div className='grid grid-cols-12 items-end'>
              <div className='xs:col-span-12 lg:col-span-5'>
                <h3>/ works</h3>
                <h2 className='max-w-15'>Selected work client projects.</h2>
                <p className='max-w-40 mt-8 text-14 text-gray'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quae nemo saepe quas modi excepturi autem.
                </p>
              </div>
              <div className='xs:col-span-12 lg:col-span-7'>
                <h2
                  className={`stylishHeading -rotate-10 xs:text-center lg:text-left ${
                    darkMode ? 'text-darkGray' : 'text-gray'
                  }`}
                >
                  Work & code.
                </h2>
              </div>
            </div>
            <div className='grid grid-cols-12 xs:mt-10 lg:mt-32 xs:gap-4 lg:gap-10'>
              <div className='xs:col-span-12 lg:col-span-4'>
                <h2 className='text-primary xs:text-32 lg:text-48'>01.</h2>
                <h2 className='xs:text-20 lg:text-24'>Toronto Fine Jewelry</h2>
                <h3 className='xs:text-12 lg:text-16'>JUNE 2K21</h3>
              </div>
              <div className='xs:col-span-12 lg:col-span-8'>
                <img src='/assets/TFJ.png' alt='' className='drop-shadow-xl' />
              </div>
              <div className='xs:col-span-12 lg:col-span-8 xs:order-4 lg:order-3'>
                <img
                  src='/assets/Cambo.png'
                  alt=''
                  className='drop-shadow-xl'
                />
              </div>
              <div className='xs:col-span-12 lg:col-span-4 text-right xs:order-3 lg:order-4 xs:mt-20 lg:mt-0'>
                <h2 className='text-primary xs:text-32 lg:text-48'>02.</h2>
                <h2 className='xs:text-20 lg:text-24'>Cambokicks</h2>
                <h3 className='xs:text-12 lg:text-16'>AUG 2K21</h3>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`lg:py-32 ${darkMode ? 'bg-darkCard' : 'bg-grayBg'}`}
          ref={contactRef}
        >
          <Contact />
        </section>
      </Layout>
    </>
  );
}

export default Home;
