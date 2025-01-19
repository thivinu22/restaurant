import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 flex justify-between items-center p-4 lg:p-20 xl:p-40 text-red-500'>
      <Link className='font-bold text-xl' href="/">MASSIMO</Link>
      <p>copyright 2025</p>
    </div>
  )
}

export default Footer