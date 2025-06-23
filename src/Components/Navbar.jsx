import React from 'react'

const Navbar = ({page,getHome}) => {



  return (
    <div>
        <nav className=' text-white py-4 text-2xl font-extralight text-center flex items-center justify-evenly mr-[450px]' >

          <span  onClick={()=> getHome("mood")} className='text-3xl cursor-pointer ' >
            
          
          { page !== "hero" && 
            page !== "mood" && 
          (
             <img src="/backArrow.svg" alt="" 
             className='w-9 bg-amber-100 rounded-[50%] mt-2 hover:scale-110 transition-all transform ease-in-out '
             /> 
             )}
          
          </span>
          <button onClick={()=> getHome("hero")}
          className='cursor-pointer'
            > 
          Home

          </button>
        </nav>
      <hr className='p-[0.3px] bg-amber-100 ' />
    </div>
  )
}

export default Navbar









