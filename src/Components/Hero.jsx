import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Hero() {
  const slides = [
    {
      url: 'https://wallpapercave.com/wp/wp3748843.jpg',
      head:'Welcome to the Diablo Mansion',
      text:'Weak Hearts Beware'
    },
    {
      url: 'https://wallpaperaccess.com/full/162297.jpg',
      head:'Prepare for a Bone Chilling Experience',
      text:'Are you a Brave One?',
    },
    {
      url: 'https://wallpaperaccess.com/full/4241865.jpg',
      text:'Dead Men Tell No Tales',
      head:'Your Worst Nightmare Awaits'
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    
    return (<>
      <div className='h-[86vh] md:h-[85vh] w-full  relative group border-b-8 border-black '>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='flex w-full h-full flex-col gap-y-7 bg-no-repeat bg-center bg-cover duration-500 justify-center items-center'
          
        ><p className='text-2xl min-[441px]:text-3xl min-[526px]:text-4xl md:text-5xl font-medium min-[915px]:text-7xl capitalize Nightmare text-orange-700'>{slides[currentIndex].head}</p>
          <span className='min-[441px]:text-base text-yellow-600 font-bold text-sm md:text-lg min-[915px]:text-2xl text-center font-Eater'>{slides[currentIndex].text}</span></div>
        {/* Left Arrow */}
        <div className=' group-hover:block absolute top-[50%] -translate-x-0 min-[600px]:hover:-translate-x-3  translate-y-[-50%] sm:left-10 text-2xl rounded-full sm:p-2 bg-transparent text-white cursor-pointer left-0 '>
          <BsChevronCompactLeft onClick={prevSlide} size={64} />
        </div>
        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 min-[600px]:hover:translate-x-3 translate-y-[-50%] sm:right-10 right-0 text-2xl rounded-full sm:p-2 bg-transparent text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={64} />
        </div>

      </div>
    </>
  )
}

export default Hero
