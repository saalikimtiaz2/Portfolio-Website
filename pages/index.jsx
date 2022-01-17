import React from 'react';
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
} from '../components/SvgIcons';
import Styles from '../styles/home.module.scss';

function Home() {
  const { darkMode } = useContext(ThemeContext);
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
                  <p className='max-w-35 mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quae nemo saepe quas modi excepturi autem?
                  </p>
                  <button className='text-24 text-primary flex items-center gap-4 mt-4'>
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
          <div className='xs:px-4 lg:px-20 pt-4 '>
            <div className='grid grid-cols-12 xs:gap-y-20 lg:gap-6 mb-10'>
              <div className='xs:col-span-12 lg:col-span-6 relative'>
                <h2
                  className={`${Styles.stylishHeading} -rotate-10 ${
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
                    <h2 className='text-40 text-primary mb-2'>3+</h2>
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
              </div>
            </div>
            <h2
              className={`${Styles.stylishHeading} rotate-0 ${
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
        </section>
      </Layout>
    </>
  );
}

export default Home;
