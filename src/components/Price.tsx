"use client"
import { Producttype } from '@/types/types';
import { useCartStore } from '@/utils/store';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

 

const Price = ({product} : {product : Producttype}) => {

    const {addToCart} = useCartStore();  

    const [total, setTotal] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        useCartStore.persist.rehydrate();
    },[])

 
    useEffect(() => {


        // setTotal((quantity * (product.options?.length ? product.price + product.options[selected].additionalPrice : product.price)))


        if(product.options?.length){
            setTotal(
                quantity * (Number(product.price) + Number(product.options[selected].additionalPrice))
            );
        }


    },[quantity,selected,product]);


    const handleCart = () => {
        addToCart({
            id: product.id,
            title: product.title, 
            img: product.img, 
            price: total,
            ...(product.options?.length && {optionTitle: product.options[selected].title,}),
            quantity: quantity,
        })
        toast.success("Product added to the cart!")
    }

  return (
    <div className='flex flex-col gap-4'>
        
            <h2 className='font-bold text-2xl'>${Number(total).toFixed(2)}</h2>
             
            
            {/* OPTIONS CONTAINER */}
            <div className='flex gap-4'>
                {product.options?.length && product.options?.map((option,index) => (
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


                <button className='bg-red-500 ring-1 ring-red-500 uppercase w-56 p-3 text-white' onClick={handleCart}>
                    Add to Cart
                </button>

            </div>
    
    </div>

  )
}

export default Price