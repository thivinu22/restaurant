import React from 'react'

type props = {
    price : number,
    id : number,
    options?: { title: string; additionalPrice: number }[] 
}



const Price = ({price,id,options} : props) => {
  return (
    <div>Price</div>
  )
}

export default Price