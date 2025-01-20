import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex text-red-500'>
      {pizzas.map((item) => (
        <Link className='w-full h-[60vh] border-b-2 border-r-2' key={item.id} href={`/product/${item.id}`}>

          {/* IMAGE CONTAINER */}

          {item.img && (
            <div className='relative'>
              <Image src={item.img} alt='' fill/>
            </div>
          )}

          {/* TEXT CONTAINER */}

        </Link>
      ))}
    </div>
  )
}

export default page