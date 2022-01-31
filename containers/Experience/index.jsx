import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { icons } from '../../models';
import { UIUX, Developer } from '../../components/SvgIcons';
import Styles from './styles.module.scss';

function Experience() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // states
  const [hoverUIUX, setHoverUIUX] = useState(false);
  const [hoverDeveloper, setHoverDeveloper] = useState(false);
  return (
    <>
      <div className='xs:px-4 lg:px-20 pt-4 '>
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
              Experienced frontend developer remotly from Islamabad, Pakistan.
            </h2>
            <p className='max-w-55 mt-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
              nemo saepe quas modi excepturi autem? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse quae nemo saepe quas modi
              excepturi autem?
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
              darkMode ? 'hover:bg-darkCard hover:shadow-xl' : 'hover:shadow-md'
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
              nemo saepe quas modi excepturi autem.
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
    </>
  );
}

export default Experience;
