"use client"
import { OrderType } from '@/types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react' 
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

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

  const queryClient = useQueryClient();
  
   
  const mutation = useMutation({
    mutationFn : ({id,status} : {id:string; status: string}) => {
      
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method:"PUT", 
        headers: {
          "Content_Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess( ) {
      queryClient.invalidateQueries({queryKey:["orders"]})
    }
  })
   
  
  const handleUpdate = (e:React.FormEvent<HTMLFormElement>,id:string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value; 
    
    mutation.mutate({id,status})

    toast.success("Order status has been changed!"); 
  };
  
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
              
                <tr className={`${item.status !== "delivered" && "bg-red-50"}`} key={item.id}>
                  <td className='hidden md:block py-6 px-1'>{item.id}</td>
                  <td className=' py-6 px-1'>{item.createdAt.toString().slice(0,10)}</td>
                  <td className=' py-6 px-1'>${item.price}</td>
                  <td className=' py-6 px-1 hidden md:block'>{item.products[0].title}</td>

                  {session?.user.isAdmin ? (
                    <td>
                      <form className='flex justify-center items-center gap-4' onSubmit={(e) => handleUpdate(e,item.id)}>
                        <input placeholder={item.status} className='p-2 ring-1 ring-red-100 rounded-md'/>
                        <button className='bg-red-300 font-bold mr-4 py-2 px-4 rounded-lg hover:bg-red-400'>
                          <p>EDIT</p>
                        </button>
                      </form>
                    </td>

                  ) : (

                    <td className=' py-6 px-1'>{item.status}</td>

                  ) }

                </tr>
              )) 
            }
          </tbody> 
        </table>
    </div>
  )
}

export default page