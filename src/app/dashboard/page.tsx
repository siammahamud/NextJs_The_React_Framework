import Link from 'next/link'
import React from 'react'

const dashboardPage =async ({params}:{
  params: Promise<{ articleId: string }>;
}) => {
  const {articleId} =await params;
  return (
    <div className='relative'>
        <h1 className='text-4xl text-center font-bold text-cyan-600 '>Dashboard</h1>
        <ul className='absolute flex flex-col gap-10 space-y-10 w-1/4 text-left p-5 h-screen bg-gray-100 top-0'>
            <Link href={'/dashboard/profile'}>Profile</Link>
            {/* <Link href={'/dashboard/setting'}>setting</Link> */}
            <Link href={`dashboard/article/${articleId}`}>article</Link>
        </ul>
        
    </div>
  )
}

export default dashboardPage