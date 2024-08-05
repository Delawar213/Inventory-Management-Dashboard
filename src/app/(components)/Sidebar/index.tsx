
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
        {/* TOP LOGO */}
      <div className="flex justify-center md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">Delawar&nbsp;Shah</h1>
      
      <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:to-blue-100">
        <Menu className="w-4 h-4 " />
      </button>
     </div>
     {/* LINKS  */}
     <div className="flex-grow mt-8">
        {/* Links Here  */}
     </div>
     {/* Footer  */}

     <div>
        <p className="text-center text-xs text-gray-500">&copy: 2024 Delawar</p>
     </div>

    </div>
    

  )
}

export default Sidebar
