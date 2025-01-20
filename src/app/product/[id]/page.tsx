import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>

      {/* IMAGE CONTAINER */}

      {singleProduct.img && (

          <div className='relative w-full h-1/2 md:h-[70%]'>
              <Image src={singleProduct.img} alt='' className='object-contain' fill/>
          </div>

      )}

        

      {/* TEXT CONTAINER */}

      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:gap-6 lg:gap-8 md:justify-center'>
        <h1 className='text-3xl xl:text-5xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>

    </div>
  )
}

export default page