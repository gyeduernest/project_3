import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Blobs1 } from './Components'
import { Img1} from '../images'
import Services from './Services'
import Projects from './Projects'
import Pricing from './Pricing'
import Contact from './Contact'




export default function Home() {
  return (
    <div className='lg:p-10 lg:mt-10 bg-slate-50'>
       <div className='mt-5  text-center md:ml-96'>
          <div className="text-center sm:w-1/2 w-full  p-5 ml-4 mb-5"><h1 className=' text-5xl font-bold text-center md:w-full'>Get the <span className='text-violet-700'> Best</span> services from <span className='text-orange-400'>Me</span></h1>
          </div>       
      </div>
     
<div className='p-20 md:flex'>

             <NavLink to="/contact"> <button className='w-56 h-12 bg-orange-400 rounded-md hover:bg-violet-700 hover:text-white ease-in-out lg:ml-96'> Let us Talk</button>
              </NavLink>
              <h3 className='p-2 '> Why should you hire me?</h3>
</div>
<div className='flex'>
        
</div>
        <div className="lg:p-2 text-center md:flex lg:w-full lg:h-12    lg:px-20 justify-between text-slate-500">
          <div className='mb-2'>UI/UX</div>
          <div className='mb-2'>ArcMap</div>
          <div className='mb-2'>web development</div>
          <div className='mb-2'>React</div>
          <div className='mb-2'>Tableau</div>
          <div className='mb-2'>PowerBi</div>
          <div className='mb-2'>Microsoft Office</div>
          <div className='mb-2'>Wordpress development</div>
        </div>
        <div className='border border-orange-500 blur-md'></div>

        

        <div className='lg:mt-10 lg:flex mt-5'> <h1 className='lg:text-6xl md:ml-56 text-3xl text-center font-bold'>Just tell me What you want</h1>
        <NavLink to="/contact"> <button className='ml-20 mt-5 w-56 h-12 bg-violet-700 rounded-md hover:bg-orange-400 text-white hover:text-black ease-in-out lg:ml-10 lg:mt-2'> Hire me Now</button>
         </NavLink>
         </div>


          <div className='h-10'></div>

          <Services/>
          <Projects/>
          <Pricing/>
          <Contact/>


          
    </div>
  )
}
