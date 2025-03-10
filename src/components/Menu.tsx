"use client"
import Image from 'next/image'
import Link from 'next/link';
import { it } from 'node:test';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

// TEMPORARY  
const user = false

const Menu = () => {

    const [open,setOpen] = useState(false);

  return (
    <div>
        {!open ? (<Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)}/>
        ) : (
                  <Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)}/>   
        )}

        {open && (<div className='absolute left-0 top-24 bg-red-500 text-white uppercase text-2xl w-full h-[calc(100vh-48px)] flex flex-col gap-2 items-center justify-center z-10'>
            {links.map((item) => {
                return <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>{item.title}</Link>
            })}

            {!user ? <Link href="/login" onClick={() => setOpen(false)}>Login</Link> : <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>}
            
            <Link href="/cart" onClick={() => setOpen(false)}>
                <CartIcon />
            </Link>
        </div>)
        }

    </div>
  )
}

export default Menu