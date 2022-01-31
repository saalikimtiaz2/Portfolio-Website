/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Styles from './styles.module.scss';

function Contact() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // React-Hook_Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const resolveLater = new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(
      resolveLater,
      {
        pending: 'Sending...',
        success:
          ('Message Sent!',
          {
            icon: ({ theme, type }) => (
              <img src='/assets/icons/msg.svg' alt='' />
            ),
          }),
        error: 'Message not Sent!',
      },
      { theme: darkMode ? 'dark' : 'light' }
    );

    reset();
  };
  return (
    <div className='xs:px-4 lg:px-0 lg:container lg:mx-auto'>
      <div className='grid grid-cols-12 xs:gap-4 lg:gap-10 items-center'>
        <div className='xs:col-span-12 lg:col-span-6'>
          <h2 className={Styles.contactTitle}>
            Let&apos;s Connect
            <img
              src='/assets/icons/right-arrow.svg'
              alt=''
              className='headingIcon'
            />
          </h2>
          <p className='max-w-45 mt-8 text-14 text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
            nemo saepe quas modi excepturi autem.
          </p>
          <h2
            className={`stylishHeading -rotate-10 text-center ${
              darkMode ? 'text-darkGray' : 'text-gray'
            }`}
          >
            Inquiries.
          </h2>
        </div>
        <div className='xs:col-span-12 lg:col-span-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='fullName'>
              Your Name
              <input
                placeholder='Jhon Doe'
                {...register('fullName', { required: true })}
                style={{ color: darkMode ? 'white' : 'black' }}
              />
              {errors.fullName && (
                <span className='error'> Please Enter your Name</span>
              )}
              <span className='space' />
            </label>

            <label htmlFor='email'>
              Your Email Address
              <input
                placeholder='abc@example.com'
                type='email'
                {...register('email', { required: true })}
                style={{ color: darkMode ? 'white' : 'black' }}
              />
              {errors.email && (
                <span className='error'> Pleae Enter your Email Address</span>
              )}
              <span className='space' />
            </label>

            <label htmlFor='detail'>
              Tell Me About Your Project
              <textarea
                rows={2}
                placeholder='Project Detail'
                {...register('detail')}
                style={{ color: darkMode ? 'white' : 'black' }}
              />
            </label>

            <button
              type='submit'
              className='text-24 text-primary flex items-center gap-4 mt-4 btn btn-right'
            >
              Send
              <img src='/assets/icons/right-arrow.svg' alt='' className='h-4' />
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
