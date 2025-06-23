import React from 'react'
const subOptions = {
     Drunk : ["Laugh", "Cry", "Twist", "Chill"] ,
     High : ["Visual" , "Weird" ,"Groove" , "Deep"] ,
     Sober : ["Think" , "Warm" ,"Inspire" , "Explore"] ,
}
const Submood = ({mood ,setSubmood ,goNext}) => {
   const options = subOptions[mood] || []

   const handleButtonClick =(data)=>{
     setSubmood(data)
     goNext()
   }
  console.log(mood)
  return (
    <div  className="my-[100px] gap-5 flex flex-col items-center justify-center">
        <h1 className="text-[3.75rem] font-bold text-amber-50 mb-9 font-sans"> What Kind Of {mood} You Are ?  </h1>

     {
        options.map((data) => (
            <button onClick={()=> handleButtonClick(data)}
            key={data}
            className="w-[300px] h-[60px] rounded-4xl shadow-2xl cursor-pointer transition-all duration-800 ease-in-out border-amber-50 border-1 text-[1.4rem] text-amber-50 hover:text-amber-950 hover:bg-amber-100 hover:scale-x-110 hover:text-[1.6rem] m-1"
            >
                {data}
            </button>
        ))
     }
    </div>
  )
}

export default Submood
