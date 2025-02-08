import React from 'react'

const dashboardPage = () => {
  return (
    <div className='relative'>
        <h1 className='text-4xl text-center font-bold text-cyan-600 pt-10'>Dashboard</h1>
        <ul className='absolute space-y-10 w-1/4 text-left p-5 h-screen bg-gray-100 top-0'>
            <ol>Profile</ol>
            <ol>Setting</ol>
        </ul>
        
    </div>
  )
}

export default dashboardPage