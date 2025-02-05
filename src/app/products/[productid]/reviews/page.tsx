import Link from 'next/link'
import React from 'react'

const ReviewsPage = () => {
  return (
    <div className='flex gap-5'>Reviews
        <Link href={'/review/1'}>Review 1</Link>
        <Link href={'/review/2'}>Review 2</Link>
        <Link href={'/review/3'}>Review 3</Link>
    </div>
  )
}

export default ReviewsPage