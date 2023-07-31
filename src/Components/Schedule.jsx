import React from 'react'

function Schedule() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto ' id='schedule' >
        <h1 className='text-white Midnight text-5xl min-[411px]:text-7xl'>Schedule</h1>
<div className='grid grid-rows-5 grid-cols-3 text-white text-center w-5/6 h-[50vh] mx-auto shadow-2xl shadow-black my-20 bg-black/70 rounded-xl'>

<div className='border-b border-white border-r flex justify-center items-center'><img src="/Eye.gif" alt="eye" className='h-20'/></div>
<div className='text-xl min-[411px]:text-3xl border-b border-r border-white flex justify-center items-center font-Metal'>Weekdays</div>
<div className='text-xl min-[411px]:text-3xl border-b border-white flex justify-center items-center font-Metal'>Weekends</div>
<div className='text-xl min-[411px]:text-3xl border-r flex justify-center items-center font-Metal'>Morning</div>
<div className='text-sm border-r border-white flex justify-center min-[411px]:text-lg items-center'>10AM - 1PM</div>
<div className='text-sm flex justify-center items-center min-[411px]:text-lg'>9AM - 1PM</div>
<div className='col-start-1 col-end-4 border-y border-white bg-orange-500 flex justify-center items-center flex-col' ><h1 className='min-[411px]:text-xl font-semibold'>Lunch Buffet (only for VIP visitors)</h1><span>1PM - 3PM</span></div>
<div className='text-xl min-[411px]:text-3xl border-r border-white flex justify-center items-center font-Metal'>Evening</div>
<div className='text-sm border-r border-white flex justify-center items-center min-[411px]:text-lg'>3PM - 9PM</div>
<div className='text-sm flex justify-center items-center min-[411px]:text-lg'>3PM - 9PM</div>
<div className='col-start-1 col-end-4 border-t border-white rounded-b-xl flex  flex-col justify-center items-center bg-orange-500'><h1 className='min-[411px]:text-xl font-semibold'>Dinner Buffet (only for VIP visitors)</h1>
<span>9Pm - 11PM</span></div>
</div>
    </div>
  )
}

export default Schedule
