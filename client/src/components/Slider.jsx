import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import Hero1 from '../Images/hero1.jpg'
import Hero2 from '../Images/hero2.jpg'
import Hero3 from '../Images/hero3.jpg'

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
      };

      const items = [
        <div key={1}>
            <div className='relative w-full h-[600px]'>
                <img src={Hero1} alt="Hero image 1" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='text-5xl font-bold'>የሰንበት ቀን መርሃግብራት</p>
                    <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-10 h-10 flex items-center">
                        <button className="w-full mx-auto text-lg font-bold text-white">
                            ሁሉም መርሃግብራት
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        <div key={2}>
            <div className='relative w-full h-[600px]'>
                <img src={Hero2} alt="Hero image 2" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='text-5xl font-bold'>የደብረ መድኃኒት መድኃኔዓለም ቤተክርስቲያን</p>
                    <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-10 h-10 flex items-center">
                        <button className="w-full mx-auto text-lg font-bold text-white">
                            ስለ ደብሩ
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        <div key={3}>
            <div className='relative w-full h-[600px]'>
                <img src={Hero3} alt="Hero image 3" className="w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                    <p className='text-5xl font-bold'>በየዕለቱ ስብከቶችን ያግኙ</p>
                    <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-10 h-10 flex items-center">
                        <button className="w-full mx-auto text-lg font-bold text-white">
                            ሁሉም ስብከቶች
                        </button>
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
