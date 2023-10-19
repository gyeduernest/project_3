import React from 'react'

export default function Contact() {
  return (
    
    <div className=' md:flex justify-center md:mt-10 '>
      <form action="">
      <div className='w-80 ml-10  border shadow-md border-gray-300 rounded-lg p-5 bg-slate-100'>
      <label for="email">Insert Email</label>
      <input type="email" name='email' id='email' placeholder='email@' className='shadow-md focus:border-2 focus:border-blue-700 w-full h-12 border border-gray-400 rounded-lg px-5 mb-10 '  />
        <label for="phone-number">Phone number:</label>
        <input type="tel" id="phone-number" name="phone_number" placeholder="+1 (555) 555-5555" className='shadow-md focus:border-2 focus:border-blue-700 w-full h-12 border border-gray-400 rounded-lg px-5 mb-10 ' />
        <label for="Message">Submit Message</label>
        <textarea className=' flex-wrap focus:border-2 focus:border-blue-700 w-full h-40 border border-blue-200 rounded-lg text-center mb-10 shadow-md'></textarea>
<button className='w-full h-12 bg-violet-700 rounded-lg  text-white'>Submit</button>
      </div>


      </form>
      
      <div className='h-20'></div>
    </div>
    
  )
}
