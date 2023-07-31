
      import React from 'react'
import { Link } from 'react-router-dom'

function PricingEnd() {
  return (
    <div id='ticket'>
<section className="text-gray-400  body-font overflow-hidden ">
  <div className="container py-24 min-[1240px]:w-2/3 mx-auto">
    <div className="flex flex-col text-center w-full mb-20 justify-between">
      <h1 className=" text-7xl font-medium title-font mb-2 text-white font-Mystery">TICKETS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-300">All tickets for kids under the age of 10 are 50% off.</p>


      <div className="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
        <Link to='/'className="py-1 px-4 text-gray-300 focus:outline-none hover:cursor-pointer">Weekdays</Link>
        <Link to='/end' className="py-1 px-4 bg-orange-500 text-white focus:outline-none hover:cursor-pointer">Weekends</Link>
      </div>
    </div>
    <div className="flex flex-col min-[835px]:grid min-[835px]:grid-cols-2 min-[835px]:grid-rows-1  w-full mx-auto">
    
      <div className="p-4 w-[400px] mx-auto">
        <div className="h-[380px] p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hiddenbg-black/70 shadow-md shadow-orange-700 bg-black/70">
          <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">STANDARD</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>	
&#8377;350</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/head</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-500 text-gray-900 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              </span><span>Entry to <span className='text-yellow-400'>Entrance of Hell</span> & <span className='text-yellow-400'>Slaughter Asylum</span>(only on weekends)</span>
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-500 text-gray-900 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Free Commemorative Photoshoot
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-500 text-gray-900 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span><span>Free <span className='text-orange-600'>Souvenir Hat</span> for the <span className='text-yellow-400'>first 7 days of opening</span></span>
          </p>

        </div>
      </div>
       <div className="p-4  w-[400px] mx-auto">
        <div className="h-[380px] p-6 rounded-lg border-2 bg-black/70 shadow-md shadow-slate-700 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">VIP</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>	
&#8377;700</span>
            <span className="text-lg ml-1 font-normal text-gray-400">/head</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span><span>Entry to <span className='text-yellow-400'>Entrance of Hell</span> & <span className='text-yellow-400'>Slaughter Asylum</span>(only on weekends)</span>
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span><span>Free Commerative <span className='text-yellow-400'>Costume</span> Photoshoot</span>
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span><span>Free <span className='text-orange-700'>Souvenir Plushie</span> for the <span className='text-yellow-400'>first 10 days of opening</span></span>
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span><span><span className='text-yellow-400'>Complimentary Lunch or Dinner buffet</span> (depending on slot booked, i.e., Morning or Evening)</span>
          </p>
        </div>
      </div>

      </div>
  </div>
</section>      
    </div>
  )
}

export default PricingEnd
