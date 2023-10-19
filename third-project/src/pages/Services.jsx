import React from 'react'
import { ServiceCard, ServiceCard2, ServiceCard3,} from './Components'

export default function Services() {
  return (
    <div className='dark:text-white p-10  lg:justify-center   lg:items-center'>
        <div>
          <h1 className='text-4xl font-bold text-violet-600'>Get to know the services i offer</h1>
          <div className="md:w-96 mt-5"><p className='text-slate-400 text-sm'>The services i offer are up to date when it comes to the standards and ractices of that discipline which is because i have made it my goal to deliver best quality with no compromise</p></div>
        </div>  


        <div className='w-80 md:w-full rounded-lg h-40 bg-slate-200 md:flex shadow-md py-12 px-5 mt-10'>
          
            <input type='search' placeholder='Search' className='font-light rounded-md w-full md:w-96   h-12 text-center  focus:border-2 focus:border-violet-500'/>
            <div className='md:p-5 sm:block md:block hidden'><h3 className='text-slate-600 font-light text-sm md:justify-end '>Showing all results</h3></div>
                    
        </div>

        <div className='mt-10'><h1 className='text-center text-2xl font-bold'>The following are what i offer</h1></div>
        
        
    <div className='md:flex md:gap-5 '>
      <ServiceCard name="UI/UX" description="Let me join your team for UI/UX projects." category="design"/>
      <ServiceCard2 name="Digital Marketing" description="Let me help you with your cmpaign with my team" category="Marketing"/>
      <ServiceCard name="Web development" description="with the help of UI/UX i can help in coding the designs" category="coding"/>
      <ServiceCard3 name="Data-Analytics" description=" Let me research and analyse data for you" category="Research"/>
    </div>
    <div className='md:flex md:gap-5 '>
      <ServiceCard3 name="Technical Report" description="Let me join your team for UI/UX projects." category="Research"/>
      <ServiceCard3 name="Data Collection" description="Let me help you with your cmpaign with my team" category="Research"/>
      <ServiceCard2 name="Content Management" description="with the help of UI/UX i can help in coding the designs" category="Marketing"/>
      <ServiceCard2 name="More Services" description=" Let me research and analyse data for you" category="More"/>
    </div>

    <div className='  md:mt-10  md:flex justify-center items-center'>
      <h1 className='text-5xl font-bold mr-5  mt-10 mb-10 text-center'> Get your <span className='text-orange-400'>dream</span> deal Today by <span className='text-violet-600'>clicking here</span> </h1>
      <button className='text-white  w-56 hover:bg-violet-700  hover:text-white ease-in-out delay-100  h-16 bg-orange-400 ml-16 rounded-md' > Get Discount</button>
    </div>
    <div className="mb-10"></div>


    
        
       
          
        
     </div>
  )
}
