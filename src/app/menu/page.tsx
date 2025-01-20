import { menu } from '@/data'
import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 lg:px-20 xl:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-center'>

      {menu.map((category) => (
        <Link key={category.id} href={`menu/${category.slug}`} style={{backgroundImage: `url(${category.img})`}} className='h-1/3 md:h-[400px] bg-cover p-8 w-full'> 
          <div className={`text-${category.color} w-1/2`}>
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            {/* <button className={`hidden xl:block bg-${category.color} text-red-500 py-2 px-4 rounded-md`}>Explore</button> */}
          </div>
        </Link>
      ))} 

    </div>
  )
}

export default page

