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
import Experience from '../containers/Experience';
import Work from '../containers/Work';
import Contact from '../containers/Contact';
import Styles from '../styles/home.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // Ref's
  const contactRef = useRef();

  // Ref's Function
  const handleContactScroll = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
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
          <Experience />
        </section>
        <section>
          <Work />
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
