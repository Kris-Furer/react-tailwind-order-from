import React from 'react'
import Counter from "./Counter"




  

function MenuItem({item}) {
  return (
    <div className='p-3 border'>
        <div className='flex justify-between border-1 py-2'>
       <h2 className='font-semibold text-lg'>{item.name}</h2>
       <p className="font-semibold text-lg">{item.price}</p> 
        </div>

       <div className='flex justify-between items-baseline'>
       <p>{item.description}</p>
       
       <Counter/>

       </div>
    </div>
  )
}

export default MenuItem