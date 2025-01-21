"use client"
import { OrderType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { it } from 'node:test'
import React, { useEffect } from 'react'

const page = () => {

  const {data:session, status} = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // if (status === "unauthenticated") {
  //   router.push("/");
  // }
 
  const { isPending, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) =>
        res.json(),
      ),
  })

  if(isPending || status === "loading") return "Loading....";


  return (
    <div className='p-4 lg:p-20 xl:p-40'>
        <table className='w-full border-separate border-spacing-3'>
          <thead className='text-left'>
            <tr>
              <th className='hidden md:block'>Order Id</th>
              <th>Date</th>
              <th>Price</th>
              <th className='hidden md:block' >Products</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item:OrderType) => (
              
                <tr className='text-sm md:text-base bg-red-50' key={item.id}>
                  <td className='hidden md:block py-6 px-1'>{item.id}</td>
                  <td className=' py-6 px-1'>{item.createdAt.toString().slice(0,10)}</td>
                  <td className=' py-6 px-1'>${item.price}</td>
                  <td className=' py-6 px-1 hidden md:block'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                  <td className=' py-6 px-1'>On the way (approx. 10min)...</td>
                </tr>
              )) 
            }
          </tbody> 
        </table>
    </div>
  )
}

export default page