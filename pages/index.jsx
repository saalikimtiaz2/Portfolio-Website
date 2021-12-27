import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'
import { Linkedin, Github, Facebook, Instagram } from '../components/SvgIcons'
import Styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Salik Imtiaz | Frotend Engineer (React)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={Styles.heroSection}>
          <section className={Styles.bluredBox}>
            <div className={`${Styles.content}`}>
              <div className='lg:container lg:mx-auto p-4'>
                <div className="grid grid-cols-12 items-center">
                  <div className="xs:col-span-12 lg:col-span-5 xs:order-2 lg:order-1">
                    <h1 className="text-32 font-light leading-tight italic">Hy! I Am</h1>
                    <h1 className="text-48 text-primary leading-tight font-bold ">Salik Imtiaz</h1>
                    <p className='mb-4'>Experienced Frontend Engineer with a demonstrated history of working
                      in the software development industry.</p>
                    <ul className='flex items-center'>
                      <li className='mr-4'><Linkedin /></li>
                      <li className='mr-4'><Github /></li>
                      <li className='mr-4'><Facebook /></li>
                      <li className='mr-4'><Instagram /></li>
                    </ul>
                  </div>
                  <div className="xs:col-span-12 lg:col-span-7 xs:order-1 lg:order-2">
                    <img src='/assets/hero.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
