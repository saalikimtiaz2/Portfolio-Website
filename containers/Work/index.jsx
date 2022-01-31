import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Work() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='lg:container lg:mx-auto xs:px-4 lg:px-0'>
      <div className='grid grid-cols-12 items-end'>
        <div className='xs:col-span-12 lg:col-span-5'>
          <h3>/ works</h3>
          <h2 className='max-w-15'>Selected work client projects.</h2>
          <p className='max-w-40 mt-8 text-14 text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
            nemo saepe quas modi excepturi autem.
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
          <img src='/assets/Cambo.png' alt='' className='drop-shadow-xl' />
        </div>
        <div className='xs:col-span-12 lg:col-span-4 text-right xs:order-3 lg:order-4 xs:mt-20 lg:mt-0'>
          <h2 className='text-primary xs:text-32 lg:text-48'>02.</h2>
          <h2 className='xs:text-20 lg:text-24'>Cambokicks</h2>
          <h3 className='xs:text-12 lg:text-16'>AUG 2K21</h3>
        </div>
      </div>
    </div>
  );
}

export default Work;
