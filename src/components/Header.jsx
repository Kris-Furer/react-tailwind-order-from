import React from 'react'
import Logo from './assets/inspiration.jpg'
function Header() {
  return (
  <nav className='flex justify-between p-5'>
    <div>
      <h1 className='text-5xl font-bold text-slate-600'>OrderUp!</h1>
    </div>
<ul className='flex'>
    <li className='p-3'>Home</li>
    <li className='p-3'>About</li>
    <li className='p-3'>Contact</li>
</ul>
   
</nav>
  )
}

export default Header