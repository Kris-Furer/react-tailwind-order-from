// import MenuItem from './components/MenuItem';
import React from 'react'
import MenuItem from '../components/MenuItem';
import foodItems from "./items.js"

function OrderForm() {
  return (
    <div className="bg-slate-300 w-full m-5">
        {foodItems.map((item) => ( 
        <MenuItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default OrderForm