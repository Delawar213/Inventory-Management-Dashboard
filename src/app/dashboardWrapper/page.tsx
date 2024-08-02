import React from 'react'

const DashboardWrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={`flex  bg-gray-50 w-full min-h-screen`}>
      Side bar 
      <main>
      {children}
      </main>
      
      DashboardWrapper 
     
    </div>
  )
}

export default DashboardWrapper
