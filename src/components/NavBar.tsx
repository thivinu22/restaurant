import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

const user = false;

const NavBar = () => {
  return (
    <div className='h-12 md:h-24 flex text-red-500 items-center justify-between p-4 border-b border-b-red-500 lg:px-20 xl:px-40'>
      
      {/* LEFT LINKS */}

      <div className='hidden md:flex gap-4 text-red-500 flex-1'>
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">Contact</Link>
      </div>

      {/* LOGO */}

      <div className='text-xl md:font-bold flex-1 text-center'>
        <Link href="/">MASSIMO</Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* RIGHT LINKS */}

      <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
          <div className='md:absolute top-3 r-2 lg:static flex gap-2 bg-orange-300 px-1 rounded-md'>
            <Image src="/phone.png" alt='' width={20} height={20}/>
            <span>555 77 00</span>
          </div>


          {!user ? <Link href='/login'>Login</Link> : <Link href='/orders'>Orders</Link>}

          <Link href='/orders'>Orders</Link>

          <Link href='/cart'><CartIcon/></Link>
      </div>

    </div>
  )
}

export default NavBar