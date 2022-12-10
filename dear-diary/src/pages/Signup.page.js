import React from 'react'
import Signup from '../components/signup/Signup';
import Footer from '../components/footer/Footer';

const SplitScreen = () => {
  return (
    // <React.Fragment>
      // <div>
        <div className='w-screen h-screen grid grid-rows-12 text-white text-4xl  md:grid-cols-12'>

          {/* Left section */}
          <div className='w-full h-full centered row-span-4 md:col-span-4'>
            <img src={require('../assets/signup_landing.png')} alt='Landing page' className='text-black h-full w-full '/>
          </div>

          {/* Right section */}
          <div className='w-full h-full text-black centered row-span-4 md:col-span-8 pt-24'>
            <Signup />
          </div>

          <footer className='w-screen h-screen grid grid-rows-12 text-xs'><Footer/></footer>
        </div>
        
      // </div>
      
    // </React.Fragment>

    
  );
}

export default SplitScreen;
