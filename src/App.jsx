import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Mood from './Components/Mood/Mood'

import Genre from './Components/Mood/Genre'
import Submood from './Components/Mood/Submood'
import Display from './Components/Mood/Display'
import { getMovieRecommendation } from './Api/Recommend'

const App = () => {

const [page, setPage] = useState("hero")
const [mood , setMood] = useState("")
const [submood , setSubmood] = useState("")
const [genre , setGenre] = useState("")
const [userInput , setUserInput] = useState([])
const [movie, setMovie] = useState("");



const saveFinalInput = async (selectedGenre)=>{
  setGenre(selectedGenre)
  const finalInput = {
   
    psychoactive_state: mood,
      mood: submood,
      genre: selectedGenre,
  }

console.log(finalInput);
setUserInput(prev => [...prev , finalInput])

const res = await getMovieRecommendation(finalInput);

if(res && res.movie_name){
  setMovie(res.movie_name)
}
console.log("movies" , res);

setPage("display")
}

  return (
    <div className=' h-[100vh] bg-amber-950'>
      {/*  <Navbar getHome={setCurrentView} view = {currentView}/> */}
       {/* {
        renderView()
       } */}
        <Navbar page={page} getHome={setPage}/>
   
   { page === "hero" && <Hero onStart={()=> setPage("mood")}/> }
   { page === "mood" && <Mood setMood={setMood} goNext={()=> setPage("submood")}/>}
   { page === "submood" && <Submood mood={mood} setSubmood={setSubmood} goNext={()=>setPage("genre")}/>}
   { page === "genre" && <Genre saveFinalInput={saveFinalInput}/>}
   { page === "display" && <Display  movie = {movie} />}

    </div>
  )
}

export default App
