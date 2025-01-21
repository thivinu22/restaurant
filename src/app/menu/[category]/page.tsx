
import { Producttype } from '@/types/types';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const getData = async (category:string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`,{
    cache:"no-store"
  });

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
}

type props ={
  params:{category:string}
}

const page = async ({params}:props) => {

  const products:Producttype[] = await getData(params.category)

  return (
    <div className='flex flex-wrap text-red-500'>
      {products.map((item) => (
        <Link className='w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-red-500 border-b-2 border-r-2 p-4 flex flex-col justify-between group even:bg-fuchsia-50' key={item.id} href={`/product/${item.id}`}>

          {/* IMAGE CONTAINER */}

          {item.img && (
            <div className='relative h-[80%] object-contain'>
              <Image src={item.img} alt='' fill/>
            </div>
          )}

          {/* TEXT CONTAINER */}
          <div className='flex justify-between items-center font-bold'>
            <h1 className='text-2xl p-2 uppercase'>{item.title}</h1>
            <h2 className='text-xl group-hover:hidden'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white py-2 px-4 rounded-md'>Add to Cart</button>
          </div>

        </Link>
      ))}
    </div>
  )
}

export default page