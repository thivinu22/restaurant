import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
        <div className='flex items-center gap-4' >
            <div className='relative w-8 h-8 md:h-5 md:w-5'>
                <Image src="/cart.png" alt='' fill/>
            </div>
            <span>Cart (1)</span>
        </div>
  )
}

export default CartIcon