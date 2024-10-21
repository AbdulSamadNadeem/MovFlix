import React from 'react'
import Button from '../Common/Button/Button'

const Subscription = () => {
  return (
    <>
    <div className='flex justify-around items-center h-32 bg-yellow-400 mt-16'>
    <div>
        <h1 className='text-4xl text-black font-bold'>Start First 30 Days Trial</h1>
        <p className='text-xl text-black font-light '>Enter your email to create or restart your membership.</p>
    </div>
    <div className='flex'>
        <input type="text" placeholder='Enter Your Email' className='pl-6 bg-black border border-black text-yellow-600 outline-none  min-w-96 h-12 rounded-md'/>
         <div className='absolute left-[81%]'><Button w='w-36' h='h-12' text='Get Started'/></div>
    </div>
    </div>
    </>
  )
}

export default Subscription