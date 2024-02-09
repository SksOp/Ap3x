import React from 'react'
import { Button } from './ui/button'

function Menu() {
  return (
    <div className="w-full bg-white border p-4">
    <ul className="options-list">
        <li className="hover:bg-gray-200 p-2">Home</li>
        <li className="hover:bg-gray-200 p-2">Investments</li>
        <li className="hover:bg-gray-200 p-2">Research</li>
        <li className="hover:bg-gray-200 p-2">Teams</li>
      </ul>
    <Button className='w-full'>
        <img src="./logo.png" alt="logo" className='w-10'/>
    </Button>
    </div>
  )
}

export default Menu
