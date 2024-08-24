import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const { register, handleSubmit, reset } = useForm(); // Destructure reset here
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset(); // This will now work
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                      {...register('name')} // Register input
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                      {...register('email')} // Register input
                    ></input>
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Type Your Message Here'
                      {...register('message')} // Register textarea
                    ></textarea>
                  </div>
                </div>
                <button className='submit-btn' type='submit' disabled={disabled}>
                  Submit
                </button>
              </form>
              {alertInfo.display && (
                <div
                  className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                  role='alert'
                >
                  {alertInfo.message}
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                    onClick={() =>
                      setAlertInfo({ display: false, message: '', type: '' })
                    }
                  ></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
