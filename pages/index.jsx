import Head from 'next/head';
import Layout from '../components/Layout';
import { PrimaryButton } from '../components/Buttons'
import { Linkedin, Github, Facebook, Instagram, Twitter, Developer, Graphic, UIUX } from '../components/SvgIcons'
import { icons } from '../models'
import Styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Salik Imtiaz | Frotend Engineer (React)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={Styles.heroSection}>
          <div className='lg:container lg:mx-auto p-4'>
            <div className="grid grid-cols-12 items-center">
              <div className="xs:col-span-12 lg:col-span-5 xs:order-2 lg:order-1">
                <h1 className="text-32 font-light leading-tight italic">Hy! I Am</h1>
                <h1 className="text-48 text-primary leading-tight font-bold uppercase">Salik <span className='font-light text-black'>Imtiaz</span></h1>
                <p className='mb-4'>Experienced Frontend Engineer with a demonstrated history of working
                  in the software development industry.</p>
                <ul className='flex items-center'>
                  <li className='mr-4'><Linkedin /></li>
                  <li className='mr-4'><Github /></li>
                  <li className='mr-4'><Facebook /></li>
                  <li className='mr-4'><Instagram /></li>
                  <li><Twitter /></li>
                </ul>
                <PrimaryButton>Hire Me</PrimaryButton>
              </div>
              <div className="xs:col-span-12 lg:col-span-7 xs:order-1 lg:order-2">
                <img src='/assets/hero.png' alt='' />
              </div>
            </div>
          </div>
          <h2 className={Styles.bluredText}>Salik Imtiaz</h2>
        </section>
        <section>
          <div className='lg:container lg:mx-auto xs:px-4 md:px-16 lg:px-'>
            <div className="grid grid-cols-12 xs:gap-0 lg:gap-10">
              <div className="xs:col-span-12 md:col-span-6 lg:col-span-7">
                <h1 className="text-32 font-light leading-tight italic">My awesome</h1>
                <h1 className="text-48 text-primary leading-tight font-bold">services</h1>
                <p className='max-w-65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis illo nesciunt exercitationem animi est tempora ut iusto architecto earum explicabo.</p>
                <PrimaryButton>Download Resume</PrimaryButton>
                <div className={`${Styles.card} xs:mx-auto md:mx-0 md:ml-auto`}>
                  <Developer />
                  <h1 className="text-18 font-medium uppercase mt-4"><span className='text-primary'>Frontend</span> Development</h1>

                  <p className='text-14 text-gray text-center max-w-25 mt-2'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="xs:col-span-12 md:col-span-6 lg:col-span-5 flex flex-col items-center justify-center">
                <div className={Styles.card}>
                  <UIUX />
                  <h1 className="text-18 font-medium uppercase mt-4"><span className='text-primary'>UI/UX</span> Development</h1>

                  <p className='text-14 text-gray text-center max-w-25 mt-2'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className={Styles.card}>
                  <Graphic />
                  <h1 className="text-18 font-medium uppercase mt-4"><span className='text-primary'>Graphic</span> Designing</h1>
                  <p className='text-14 text-gray text-center max-w-25 mt-2'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}
