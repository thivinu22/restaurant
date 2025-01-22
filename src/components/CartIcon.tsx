"use client"
import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CartIcon = () => {

  const {products, totalItems, totalPrice, removeFromCart} = useCartStore();  

  useEffect(() => {
          useCartStore.persist.rehydrate();
  },[])
  
  return (
        <div className='flex items-center gap-4' >
            <div className='relative w-8 h-8 md:h-5 md:w-5'>
                <Image src="/cart.png" alt='' fill/>
            </div>
            <span>Cart ({totalItems})</span>
        </div>
  )
}

export default CartIcon