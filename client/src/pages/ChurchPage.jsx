import React from 'react';
import church1 from '../assets/Images/church1.jpg';
import ch20 from '../assets/Images/ch20.jpg';
import photo from '../assets/Images/photo.jpg';
import photo1 from '../assets/Images/photo1.jpg';
import photo2 from '../assets/Images/photo2.jpg';
import photo3 from '../assets/Images/photo3.jpg';
import abat from '../assets/Images/admin.jpg';
import Map from "../components/Map";
import church2 from "../assets/Images/church2.jpg"
import church3 from "../assets/Images/church3.jpg"
import church4 from "../assets/Images/church4.jpg"
import church5 from "../assets/Images/church5.jpg"
import church6 from "../assets/Images/church6.jpg";
import { useTranslation } from "react-i18next";

function ChurchPage() {
  const { t } = useTranslation();
  return (

    <div className='mt-10'>
      <div className='text-3xl text-center font-bold mb-4'>
        <h1>{t('full_chu')}</h1>
      </div>

      <div className='flex flex-col mt-8 gap-8 gap-y-4 lg:flex-row'>
        <div className='lg:w-1/2'>
          <h1 className='text-2xl text-dark-blue font-bold text-center'>{t('his')}
          </h1>
          <p className='text-base mt-6'>{t('history_one')}
          </p>
        </div>
        <div className='lg:w-1/2'>
          <div className='w-full flex items-center justify-center overflow-hidden'>
            <img src={church2} alt="Image" className="object-cover w-3/4" />
          </div>
        </div>

      </div>
      <div className='w-full py-8'>
        <p>{t('history_two')}</p>

      </div>
      <div className='lg:flex md:block sm:block'>
        <div className='lg:w-1/2'>
          <div className='flex items-center justify-center overflow-hidden'>
            <img src={church1} alt="Image" className="object-cover w-3/4" />
          </div>
        </div>
        <div className='lg:w-1/2'>
          <p className='sm:mt-6 lg:mt-0 md:mt-6'> {t('history_three')}
          </p>
        </div>

      </div>
      <div className='w-full py-8'>
        <p>{t('history_two')}</p>
      </div>
      <div className='py-8 lg:flex md:flex sm:block flex-cols lg:space-x-8 md:space-x-8 overflow-hidden justify-center'>
        <div className=' inline-block relative'>
          <img src={church4} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xl">
            <div>
              <h3>{t('mission')}</h3>
            </div>
            <div>
              <p className='text-sm p-4'>
              {t('mi_one')}
              </p>
            </div>
          </div>
        </div>
        <div className=' inline-block relative lg:mt-0 md:mt-0 sm:mt-6'>
          <img src={photo1} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center text-white justify-center font-bold text-xl">
            <div>
              <h3>{t('vision')}</h3>
            </div>
            <div className='flex flex-col gap-y-2'>
              <div>
              <p className='text-sm'>{t('vi_one')}</p>
              </div>
              <div>
              <p className='text-sm'>{t('vi_two')}</p>
              </div>
              <div>
              <p className='text-sm'>
              {t('vi_three')}
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className=' inline-block relative lg:mt-0 md:mt-0 sm:mt-6'>
          <img src={church5} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xl">
            <div>
              <h3> {t('value')}</h3>
            </div>
            <div>
              <p className='text-xs p-4'>
              {t('value_one')}
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className='flex flex-col lg:flex-row py-8'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'> {t('father')}
          </h1>
          <p>
          {t('father_one')}
            </p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <div className='pt-8 flex items-center justify-center overflow-hidden'>
            <img src={church6} alt="Image" className="object-cover w-3/4" />
          </div>
          <h1 className='text-3xl text-dark-blue font-bold mt-4 text-center'>{t('father_name')}</h1>

        </div>


      </div>
      <div className=' py-8  min-h-full'>
        <div className='bg-gray-100 flex flex-cols'>
          <div className='lg:w-1/2 p-4 flex justify-center items-center'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </button>
           <div className='flex flex-col p-4 '>
           <span>
              <h1 className='text-dark-blue font-bold text-3x1'>{t('loc')}</h1>
            </span>
            <span>
              <p>{t('addr_d')}</p>
            </span>
            <span>
              <p>{t('addr_a')}</p>
            </span>
           </div>
          </div>
          <div className='lg:w-1/2'>
            {/* <Map /> */}
            {/* <Map /> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ChurchPage;