"use client"
import { MenuPaper } from '@mui/material'
import { Camera, Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side  */}
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=>{alert("clicked")}}>
          <Menu className="w-4 h-4"/>
        </button>
        <div className="relative">
          <input type="search" placeholder="Start to type groups & Product" className="pl-10 pr-14 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg  focus:outline-none focus:border-blue-500"/>
        </div>
      </div>
      Navbar 
    </div>
  )
}

export default Navbar
