import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <div className='max-container flex justify-between items-center max-lg:flex-col gap-10 ' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign up from
        <span className='text-coral-red'>updates</span> & Newsletter 
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='Subscribe@nike.com' className='input'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe