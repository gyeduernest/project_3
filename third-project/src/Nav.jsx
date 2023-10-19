import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='hidden sm:block md:block lg:block sm:w-full sm:h-12 p-10'>
      <Link to="/"><div className='text-slate-700 font-bold'>ErnGyeCorp</div></Link>
       
      <nav className=' mr-40 text-md flex justify-end'>
      
        <ul className='mr-20 p-3 text-slate-500 '>
          <Link to="/"className="mr-5">Home</Link>
          <NavLink to="/services" className="mr-5" >Services</NavLink>
          <NavLink to="/projects"className="mr-5">Projects</NavLink>
          <NavLink to="/pricing"className="mr-5">Pricing</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
          
        </ul>
        <NavLink to="/contact"><button className='text-white w-40 h-12 bg-violet-700 rounded-md'>Contact</button></NavLink>

      </nav>
      
    </div>
  )
}
