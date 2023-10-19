import React from 'react'
import { ProjectsCard, ProjectsCard1, ProjectsCard2, ProjectsCard3 } from './Components'

export default function Projects() {
  return (
    <div className='p-5'>

<div><h1 className="text-center text-6xl font-bold">Here are some  <span className="text-violet-700">Projects</span> i have <span className="text-orange-400">done</span></h1></div>
      <div className="mt-5 w-96 h-12 text-center justify-center md:ml-96 mb-20"><p className="text-slate-400 w-96 text-center">I can give you the best prices to help your company or any type of project you are on the offers ranges from daily rates to weekly and a month contract based deals can also be done</p>
    </div>

    <div className='grid-cols-4 md:flex  p-8  gap-5'>
    <div className='mb-5'><ProjectsCard name="Figma  Projects" category="UI/UX"/></div>
    <div className='mb-5'><ProjectsCard1 name="Arc Map Projects" category="Research"/></div>
    <div className='mb-5' ><ProjectsCard2 name="Data Analytics" category="Research"/></div>
    <div className='mb-5'><ProjectsCard3 name="Digital Marketing" category="Marketing"/></div>
    </div>

<div className='md:flex  text-center'><h1 className='text-5xl font-bold text-center md:ml-20 '>I have more Projects you can contact me</h1>
 <button className='mt-5 w-40 h-12 bg-orange-400 text-black hover:bg-violet-700 hover:text-white rounded-md hover:ease-in-out hover:delay-100 md:ml-5'>Let's Talk</button>
 <div className='h-20'></div>
</div>





    </div>
  )
}
