import React from "react";

const Mood = ({setMood , goNext}) => {
  const MoodData = ["Drunk" , "Sober", "High"];

const handleButtonClick = (lol)=>{
  setMood(lol)
  goNext()

}

  return (
    <div className="my-[100px] gap-9 flex flex-col items-center justify-center">
      <h1 className="text-[3.75rem] font-bold text-amber-50 mb-5 font-sans">
        
        What Are You Feeling Now  ??
      </h1>
      <div className="flex flex-col">
        {MoodData.map((data) => (
          <button
          key={data}
            className="w-[300px] h-[60px] rounded-4xl shadow-2xl cursor-pointer transition-all duration-800 ease-in-out border-amber-50 border-1 text-[1.4rem] text-amber-50 hover:text-amber-950 hover:bg-amber-100 hover:scale-x-110 hover:text-[1.6rem] m-3"
     onClick={()=> handleButtonClick(data)}
          >
            
            {data}
          </button>
        ))}
      </div>

      <hr className="p-[0.3px] bg-amber-100 w-[70vw] my-[80px]" />
    </div>
  );
};

export default Mood;
