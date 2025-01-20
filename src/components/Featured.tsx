import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
        {/* WRAPPER */}
        <div className='flex w-max'>
            {/* SINGLE ITEM */}
            {featuredProducts.map((item) => (

                <div key={item.id} className='w-screen md:w-[50vw] lg:w-[32vw] h-[60vh] lg:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'>


                    {/* IMAGE CONTAINER */}
                    {item.img && <div className='flex-1 w-full relative hover:rotate-[60deg] trasition-all duration-500'>
                        <Image src={item.img} alt='' fill className='object-contain'/>
                    </div>}



                    {/* TEXT CONTAINER */}
                    <div className='flex  flex-1 w-full flex-col gap-4 justify-center items-center text-center'>
                        <h1 className='text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase'>{item.title}</h1>
                        <p className='p-4 xl:p-8'>{item.desc}</p>
                        <span className='text-xl font-bold'>${item.price}</span>
                        <button className='bg-red-500 text-white rounded-md p-2'>Add to Cart</button>
                    </div>


                </div>
                )
            )}
        </div>
    </div>
  )
}

export default Featured