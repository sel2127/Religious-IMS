import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import Hero1 from '../assets/Images/hero1.jpg'
import Hero2 from '../assets/Images/hero2.jpg'
import Hero3 from '../assets/Images/hero3.jpg'

const Slider = () => {

useEffect(() => {
  const $owlCarousel = $('.owl-carousel');
  if ($owlCarousel.length) {
    require('owl.carousel');
  }
}, []);
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        dots: true,
        autoplay: true,
    autoplayTimeout: 5000,
      };

      const items = [
        <div key={1}>
            <div className='relative w-full lg:h-[600px] md:h-[600px] sm:h-[400px]'>
                <img src={Hero1} alt="Hero image 1" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='lg:text-5xl md:text-4xl sm:text-2xl font-bold'>የተለያዪ መርሃግብራት</p>
                    <div className="lg:w-1/6 md:w-1/5 sm:w-1/3 px-4 bg-dark-blue border border-gray-200 rounded-full mt-10 h-12 flex items-center justify-center">
                    <a href="/notify" className="cursor-pointer">
                        <button className="w-full mx-auto text-lg font-bold text-white px-auto text-center">
                            የቅርብ መርሃግብራት
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        <div key={2}>
            <div className='relative w-full lg:h-[600px] md:h-[600px] sm:h-[400px]'>
                <img src={Hero2} alt="Hero image 2" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='lg:text-5xl md:text-4xl sm:text-2xl text-center font-bold'>የደብረ መድኃኒት መድኃኔዓለም ቤተክርስቲያን</p>
                    <div className="lg:w-1/6 md:w-1/5 sm:w-1/3 px-4 bg-dark-blue border border-gray-200 rounded-full mt-10 h-10 flex items-center justify-center">
                    <a href="/church" className="cursor-pointer">
                        <button className="w-full mx-auto text-lg font-bold text-white text-center">
                            ስለ ደብሩ
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </div>,
        <div key={3}>
            <div className='relative w-full lg:h-[600px] md:h-[600px] sm:h-[400px]'>
                <img src={Hero3} alt="Hero image 3" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='lg:text-5xl md:text-4xl sm:text-2xl font-bold'>አስተያየትዎን ያስቀምጡ</p>
                    <div className="lg:w-1/6 md:w-1/5 sm:w-1/3 px-4 bg-dark-blue border border-gray-200 rounded-full mt-10 h-10 flex items-center justify-center">
                    <a href="/feedback" className="cursor-pointer">
                        <button className="w-full mx-auto text-lg font-bold text-white text-center">
                            አስተያየት
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </div>,
      ];
  return (
    <OwlCarousel
      className="owl-theme mt-3"
      loop
      margin={10}
    //   navText={['prev', 'next']}
      {...options}
    >
      {items}
    </OwlCarousel>
  )
}

export default Slider
