"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const DeleteButton = ({id} : {id:string}) => {

    const {data:session, status} = useSession();
    const router = useRouter();

    if(status === "loading"){
        return <p>Loading ...</p>
    }
    if(status === "unauthenticated" || !session?.user.isAdmin){
        return;
    }

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
            method: 'DELETE'
        });

        if(res.status===200){
            router.push("/menu")
            toast.success("The product has been deleted!");
        }
        else{
            const data = await res.json();
            toast.error(data.message);
        }
    }

  return (

        <button className='bg-red-300 hover:bg-red-400 text-red-950 p-2 rounded-full absolute top-4 right-20' onClick={handleDelete}>DELETE</button>

  )
}

export default DeleteButton