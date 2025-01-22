"use client"
import React, { useEffect, useState } from 'react'

type props = {
    price : number,
    id : string,
    options?: { title: string; additionalPrice: number }[] 
}



const Price = ({price,id,options} : props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);


    useEffect(() => {
        setTotal((quantity * (options?.length ? price + options[selected].additionalPrice : price)))
    },[quantity,selected,options,price]);

  return (
    <div className='flex flex-col gap-4'>
        
            <h2 className='font-bold text-2xl'>${total}</h2>
            
            
            {/* OPTIONS CONTAINER */}
            <div className='flex gap-4'>
                {options?.length && options?.map((option,index) => (
                    <button className='min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md' key={option.title}
                    style={{
                        background: selected === index ? "rgb(248 113 113)" : "white",
                        color : selected === index ? "white" : "red"
                    }}
                    onClick={() => setSelected(index)}
                    >
                    {option.title}
                    </button>
                ))}
            </div>


            {/* QUANTITY AND ADD BUTTON CONTAINER */}

            <div className='flex justify-between items-center'>


                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantitiy</span>
                    <div className='flex gap-4 items-center'>
                        <button onClick={() => setQuantity((prev) => (prev>1 ? prev-1 : 1))}>{`<`}</button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity((prev) => (prev<9 ? prev+1 : 9))}>{`>`}</button>
                    </div>
                </div>


                <button className='bg-red-500 ring-1 ring-red-500 uppercase w-56 p-3 text-white'>Add to Cart</button>

            </div>
    
    </div>

  )
}

export default Price