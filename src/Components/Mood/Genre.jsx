import React from 'react'


const Genre = ({saveFinalInput}) => {
    const genreData = ["Action" , " Comedy" , "Drama" , "Horror" , "Sci-Fi" , "Fantasy" ,"Mystery" ,"Romance"]
  return (
    <div className='my-[100px] gap-9 flex flex-col items-center justify-center'>
      <h1 className='text-[3.75rem] font-bold text-amber-50 mb-5 font-sans'>  Select Your Genre -- </h1>
   <div className='grid grid-cols-4'>

    {
        genreData.map((data)=>(
            <button className="w-[300px] h-[60px] rounded-4xl shadow-2xl cursor-pointer transition-all duration-800 ease-in-out border-amber-50 border-1 text-[1.4rem] text-amber-50 hover:text-amber-950 hover:bg-amber-100 hover:scale-x-110 hover:text-[1.6rem]
            m-3
            "
            onClick={()=>saveFinalInput(data)}
            >
            
               {data} </button>
        ))
       }
  
</div>

  <hr className='p-[0.3px] bg-amber-100 w-[70vw] my-[80px]'/>
    
    </div>
  )
}

export default Genre