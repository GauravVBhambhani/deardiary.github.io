import React, { useRef }  from 'react'
// import ContactUs from './ContactUs';
import ItemsContainer from './ItemsContainer';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form2 = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3gno5zf', 'template_fn33576', form2.current, 'JG-X1tG-aeEGYVbaq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
            <form ref={form2} onSubmit={sendEmail}>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
            md:w-2/5'><span className='text-pink-500'>Sign up</span> for our free newsletter!</h1>
            <div>
                <input type="text" placeholder="Enter email address" className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
                <button className='bg-pink-500 hover:bg-pink-600 duration-300 px-5 py-2.5
                rounded-md text-white md:w-auto w-full text-lg' onClick={sendEmail}>
                    Join the Team!
                </button>
            </div>
            </form>
        </div>
        <ItemsContainer />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
            <span>&copy; 2022 Dear Diary. All rights reserved.</span>
            <span>Terms - Privacy Policy</span>
            <span>Northeastern University, Boston</span>
        </div>
    </footer>
  )
}

export default Footer
