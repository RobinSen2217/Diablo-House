import React from 'react'

export default function SubFooter() {
  return (
    <div className="bg-cover bg-center bg-no-repeat">
    <div className='flex max-[567px]:flex-wrap justify-around w-full xl:w-5/6 mx-auto py-20'>
        <div className='flex flex-nowrap w-[500px]'>
      <img src="/logo-removebg-preview.png" alt="logo" className='min-[567px]:h-44 mx-auto w-44 h-40'/>
      <p className='text-white pt-4 min-[837px]:text-base text-[12px] pr-4'>One of New Delhi's scariest Dark Attractions is just minutes from Mathura Road, 35 Minutes from Kamla Nagar and 40 minutes from Vasant Vihar. Diablo Mansion features world-class attractions that will scare and entertain you...guaranteed.</p>
        </div>
      <p className='text-white w-[300px] pt-4 min-[567px]:text-sm text-[11px] pr-2'>
        <span className='text-xl font-semibold'>Contact Us<br/>
      </span><img src="/phone-removebg-preview.png" alt="phone" className='h-10 inline'/>
      +91 99998 77430<br/>
      <img src="/location-removebg-preview.png" alt="location"className='inline  h-10' />
      26, Municipal Market, Connaught Circus, New Delhi
      </p>
    </div>
    </div>
  )
}
