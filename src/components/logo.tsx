import React from 'react'

function Logo() {
  return (
    <div className="relative h-20 w-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white transform skew-x-12 rounded-lg border border-blue-500">
        <img className="w-full h-full object-cover" src="logo.png" alt="Your Image" />
      </div>
    </div>
  )
}

export default Logo
