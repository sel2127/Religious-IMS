import React from 'react';
import senbet from '../assets/Images/senbet.jpg';
import senbet3 from '../assets/Images/senbet3.jpg';
import senbet4 from '../assets/Images/senbet4.jpg';
import senbet6 from '../assets/Images/senbet6.jpg';
import senbet8 from '../assets/Images/senbet8.jpg';
import temari from '../assets/Images/temari.jpg';
import senbete from '../assets/Images/imagess.jpg';
import st from '../assets/Images/st.jpg';
import course from '../assets/Images/course.jpg';
import { useTranslation } from "react-i18next";


const SundaySchool = () => {
    const { t } = useTranslation();
    return (
        <div className=''>
            <div className='text-3xl text-center font-bold text-dark-blue mt-12'>
                <h2>{t('sch')}</h2>

            </div>
            <div className='pt-8'>
                <p>{t('sch_his')}</p>
            </div>

            <div className='py-8 flex flex-cols justify-center space-x-8 min-h-full'>
                <div className='relative' style={{ width: '100%' }}>
                <img src={senbet6} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                    <img src={senbet3} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                    <img src={senbet4} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                <img src={senbet8} alt="Image" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className='py-8'>
                <h1 className='text-dark-blue text-center font-bold text-3xl mb-4'>{t('train')}</h1>
                <h2 className=' font-bold text-xl'> {t('ser')}</h2>
                <p>
                {t('ser_one')}</p>
                <h2 className=' font-bold text-xl mt-4'>{t('ser_two')}</h2>
                <p>
                {t('ser_three')}
                </p>
            </div>

            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-cols'>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold text-5x1'>{t('time')}</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_1')} 2፡00pm-4:00pm</p></span><span><p className='pl-16'>{t('sun')} 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_2')} 4፡00pm-6:00pm</p></span><span><p className='pl-8'>{t('sun')} 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_3')}6፡00pm-8:00pm</p></span><span><p className='pl-8'>{t('sun')} 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={course} alt="Image" className="object-cover w-3/4" />
                        </div>
                </div>
            </div>
            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-cols'>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={senbet} alt="Image" className="object-cover w-3/4" />

                    </div>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold text-5x1'>{t('time_two')}</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_1')}2፡00pm-4:00pm</p></span><span><p className='pl-16'>{t('sun')} 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_2')} 4፡00pm-6:00pm</p></span><span><p className='pl-8'>{t('sun')} 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>{t('t_3')} 6፡00pm-8:00pm</p></span><span><p className='pl-8'>{t('sun')} 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SundaySchool