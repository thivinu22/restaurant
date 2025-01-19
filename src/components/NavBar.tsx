"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {

  const [open,setOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center h-12'>

        <div className='text-red-500 font-medium text-lg px-2 py-3'>
          <Link href="/" >MASSIMO</Link>
        </div>

        <div className='flex px-2'>
          <Image className='cursor-pointer'src={!open ? "/open.png" : "/close.png"} alt=''width={16} height={16} onClick={() => setOpen((prev) => !prev)}/>
        </div>

      </div>


      {open && (
        <div className='flex flex-col text-2xl bg-red-500 h-[calc(100vh-96px)] text-white items-center justify-center gap-6'>        
          <Link href="/" onClick={()=> setOpen(false)}>HOME</Link>
          <Link href="/" onClick={()=> setOpen(false)}>MENU</Link>
          <Link href="/" onClick={()=> setOpen(false)}>WORKING HOURS</Link>
          <Link href="/" onClick={()=> setOpen(false)}>CONTACT</Link>
          <Link href="/" onClick={()=> setOpen(false)}>LOGIN</Link>
          <Link href="/" onClick={()=> setOpen(false)}><div className='flex gap-3'><Image src='/cart.png' alt='' width={28} height={20}/>CART(1)</div></Link>
          <Link href="/" onClick={()=> setOpen(false)}><div className='flex gap-2 w-46 rounded-md h-12 items-center justify-between px-2 py-1 bg-orange-400'><Image src="/phone.png" alt='' width={28} height={20}/><span className='font-medium text-white'>555 77 00</span></div></Link>
          
        </div>
      )}


    </>
  )
}

export default NavBar