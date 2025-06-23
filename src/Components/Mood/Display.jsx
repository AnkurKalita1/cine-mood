import React from 'react'

const Display = ({movie}) => {
  return (
    <div>
      <h2 className="text-white text-2xl text-center" > 
        {movie}
      </h2>
    </div>
  )
}

export default Display
