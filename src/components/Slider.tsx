"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ]; 

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) => prev < data.length-1 ? prev+1 : 0);
    //     },4000)

    //     return () => clearInterval(interval);
    // },[])

  return (
    <div className='flex flex-col h-[calc(100vh-96px)] md:h-[calc(100vh-144px)] lg:flex-row'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 flex flex-col gap-8 items-center justify-center text-red-500 font-bold bg-fuchsia-50'>
            <h1 className='text-5xl lg:text-6xl xl:text-7xl p-4 md:p-10 text-center uppercase'>{data[currentSlide].title}</h1>
            <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative w-full flex-1">
            <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider