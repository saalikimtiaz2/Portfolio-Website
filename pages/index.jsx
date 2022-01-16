import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Head from 'next/head';
import Layout from '../components/Layout';
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
        <section className={darkMode ? 'text-white' : 'text-black'}>
          <div className='xs:px-4 lg:px-20 pt-4 '>
            <div className='grid grid-cols-12 gap-6 '>
              <div className='xs:col-span-12 lg:col-span-8'>
                <h2 className={`${Styles.title}`}>
                  Salik Imtiaz
                  <img
                    src='/assets/icons/right-arrow.svg'
                    alt=''
                    className='xs:h-12 lg:h-20'
                  />
                </h2>
              </div>
              <div className='xs:col-span-12 lg:col-span-4 xs:py-0 lg:py-10 flex flex-col justify-between'>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
