import React from 'react'
import { Prices, Prices1, Prices2 } from './Components'

export default function Pricing() {
  return (
    <div className='md:p-20 p-5'>
      <div><h1 className="text-center text-6xl font-bold">I bet you will <span className="text-orange-400">Love</span> these <span className="text-violet-600">Offers</span></h1></div>
      <div className="mt-5 w-96 h-12 text-center justify-center md:ml-96 mb-20"><p className="text-slate-400">I can give you the best prices to help your company or any type of project you are on the offers ranges from daily rates to weekly and a month contract based deals can also be done</p>
    </div>
    <div className='grid-cols-3 md:flex md:p-20 md:ml-10'>
    <Prices Package="Basic Package" Duration="Day" Amount="500" Currency="Ghc" Plan="Get plan" />
    <Prices1 Package="Super Package" Duration="Month" Amount="4000" Currency="Ghc" Plan="Get plan" />
    <Prices2 Package="Enterprise" Duration="contract" Amount="300" Currency="Ghc" Plan="Call Me" />


    </div>

    

    </div>
  )
}
