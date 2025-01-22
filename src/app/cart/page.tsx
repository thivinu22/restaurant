import Image from 'next/image'
import React from 'react'

const page = () => {

  


  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>

      {/* PRODUCTS CONTAINER */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 xl:w-1/2 lg:p-20 xl:p-40'>

          {/* SINGLE ITEM CONTAINER */}
          <div className='flex justify-between items-center mb-4'>
            <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
            <div className='flex flex-col'>
              <h1 className='uppercase text-xl font-bold'>scilian</h1>
              <span>Large</span>
            </div>
            <span className='font-bold'>$79.90</span>
            <button className='cursor-pointer'>X</button>
          </div>

          <div className='flex justify-between items-center mb-4'>
            <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
            <div className='flex flex-col'>
              <h1 className='uppercase text-xl font-bold'>scilian</h1>
              <span>Large</span>
            </div>
            <span className='font-bold'>$79.90</span>
            <button className='cursor-pointer'>X</button>
          </div>

          <div className='flex justify-between items-center mb-4'>
            <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
            <div className='flex flex-col'>
              <h1 className='uppercase text-xl font-bold'>scilian</h1>
              <span>Large</span>
            </div>
            <span className='font-bold'>$79.90</span>
            <button className='cursor-pointer'>X</button>
          </div>


      </div>


      {/* PAYMENT CONTAINER */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 lg:p-20 xl:p-40 xl:text-xl xl:gap-6'>
          <div className='flex justify-between'>
            <span>Subtotal (3 items)</span>
            <span>$79.90</span>
          </div>
      
          <div className='flex justify-between'>
            <span>Service cost</span>
            <span>$0.00</span>
          </div>
      
          <div className='flex justify-between'>
            <span>Delivery cost</span>
            <span className='text-green-500'>FREE!</span>
          </div>
          <hr className='my-2' />

          <div className='flex justify-between'>
            <span>Total (Incl. VAT)</span>
            <span className='font-bold'>$79.90</span>
          </div>


          <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
      </div>

    </div>
  )
}

export default page