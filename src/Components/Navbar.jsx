import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div>
      <header className="text-white bg-black body-font h-[14vh] md:h-[17vh] w-full ">
  <div className="container my-auto lg:px-20 mx-auto flex flex-nowrap md:flex-row items-center">
      <img src="/logo-removebg-preview.png" alt="logo" className='h-24 md:h-32'/>
 
    <nav className="mx-auto flex flex-wrap items-center text-base justify-center gap-x-10 md:gap-x-16">
      <Link to='highlights' spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-orange-500 lg:text-xl font-Nosifer hover:cursor-pointer max-[600px]:text-[10px] max-[520px]:hidden text-sm">Highlights</Link>
      <Link to='ticket' spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-orange-500 lg:text-xl font-Nosifer hover:cursor-pointer max-[600px]:text-[10px] text-sm max-[520px]:hidden">TICKETS</Link>
      <Link to='schedule' spy={true} smooth={true} offset={-50} duration={500} className=" hover:text-orange-500  lg:text-xl font-Nosifer hover:cursor-pointer max-[600px]:text-[10px] text-sm max-[520px]:hidden">Schedule</Link>
    </nav>
    <div className="bg-[url('/public/Orange_hexagon.png')] h-24 md:h-28 w-24 flex justify-center items-center text-black bg-center bg-no-repeat bg-cover animate-spin-slow">
      <p className="text-[11px] lg:text-[12px] text-center font-semibold animate-spin-slow-reverse">Opens on<br/><span className='font-bold'> 15 Aug,2023</span></p>
      </div>
  </div>
</header>
    </div>
  )
}

export default Navbar
