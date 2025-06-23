import React from 'react'


const Hero = ({onStart}) => {
  return (
    <div className=''>
      <div className="mx-[auto] my-[50px] h-[70vh] w-[85vw] bg-cover bg-center  rounded-2xl flex items-center justify-center drop-shadow-2xl shadow-2xl"
      style={{
        backgroundImage:`linear-gradient(rgba(20, 10, 0, 0.7), rgba(20, 10, 0, 0.7)), url('/Hero.jpg')`
      }}
      >
     
      <div className='flex items-center justify-center flex-col'>
      <h1 className='text-[3.75rem] font-bold text-amber-50 mb-5 font-sans'>Find The Perfect Movie For Your Mood</h1>
      <h2 className='text-amber-50 mb-[65px] text-2xl text-center font-sans'>Discover films tailored to your current state of mind. Whether you're feeling relaxed, adventurous,  or something <br /> in between, we've got the perfect
      recommendation for you.</h2>

      <button className="bg-red-600 text-amber-50 w-[300px] h-[60px] rounded-4xl shadow-2xl hover:bg-amber-50 hover:text-red-600 cursor-pointer transition-colors duration-800 ease-in-out" 
      onClick={onStart}
      >
        <span className=' text-[1.4rem] '>Get Reommenations </span>
    
      </button>

      </div>

  

      </div>
    </div>
  )
}

export default Hero
