import React from 'react';
import senbet from '../assets/Images/senbet.jpg';
import senbet3 from '../assets/Images/senbet3.jpg';
import senbet4 from '../assets/Images/senbet4.jpg';
import senbet6 from '../assets/Images/senbet6.jpg';
import senbet8 from '../assets/Images/senbet8.jpg';
import temari from '../assets/Images/temari.jpg';
import senbete from '../assets/Images/imagess.jpg';
import st from '../assets/Images/st.jpg';
import course from '../assets/Images/course.jpg'


const SundaySchool = () => {
    return (
        <div className=''>
            <div className='text-3xl text-center font-bold text-dark-blue mt-12'>
                <h2>የባህረጥበብ ሰንበት ትምህርት አመሰራረት</h2>

            </div>
            <div className='pt-8'>
                <p>የባህረጥበብ ሰንበት ትምህርት ቤት የተመሰረተው ነሐሴ 24 ቀን ሲሆን በዚህ ዕለት የአቡነ ተክለሐይማኖት ዓመታዊ በዓል ስለሆነ ድርብ አገልግሎት ነውና የምስረታ በዓሉ 1 ሳምንት አልፎ ይከበራል። በዕለቱ ሰንበት ትምህርት ቤታችን መመስረቱን መሰረት ያደረጉ ልዩ ልዩ መርሃግብራት ይቀርባሉ። ከመርሃግብራቱ መካከል ጥቂቶቹ: ጭውውቶች፣ ቃለ መጠይቆች፣ ዝማሬ፣ ወረብ፣ መዝሙራዊ ተውኔት የመሳሰሉት መርሃግብራት ይቀርባሉ።</p>
            </div>

            <div className='py-8 lg:flex md:flex sm:block flex-cols justify-center lg:space-x-8 md:space-x-8'>
                <div className='relative' style={{ width: '100%' }}>
                <img src={senbet6} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative lg:mt-0 md:mt-0 sm:mt-6' style={{ width: '100%' }}>
                    <img src={senbet3} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative lg:mt-0 md:mt-0 sm:mt-6' style={{ width: '100%' }}>
                    <img src={senbet4} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative lg:mt-0 md:mt-0 sm:mt-6' style={{ width: '100%' }}>
                <img src={senbet8} alt="Image" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className='py-8'>
                <h1 className='text-dark-blue text-center font-bold text-3xl mb-4'>በሰንበት ትምህርት ቤቱ የሚሰጡ ስልጠናዎች</h1>
                <h2 className=' font-bold text-xl'> የአገልግሎት ስልጠና</h2>
                <p>
                    ይህ ስልጠና ማንኛውም የሰንበት ተማሪ አገልግሎት ከመጀመሩ በፊት የሚወስደው ስልጠና ነው። በዚህ ስልጠና ከአገልግሎት በፊት ስላሉ ቅድመ ሁኔታዎች፣ አገልግሎት ስናገለግል ማድረግ ስላለብን እና ስለሌለብን ነገሮች፣ አገልግሎት ከጀመርን በኋላስ ህይወታችን ምን መሆን አለበት ስለሚሉት ጉዳዮች በሰፊው በተጋባዥ መምህር ትምህርት የሚሰጥበት ነው።</p>
                <h2 className=' font-bold text-xl mt-4'>የስርዓተ ዝማሬ ስልጠና</h2>
                <p>
                    ይህ ስልጠና ደግሞ የዝማሬ ስርአትን መሰረት አድርጎ ዝማሬያችን ከቅዱስ ያሬድ አንዲሁም ከአባቶቻችን ስርዓት ሳይወጣ እንዴት ማገልገል አንዳለብን ያስተምረናል። በዚህ ስልጠና ሽብሸባችን፣ ጭብጨባችን፣ ወረብም ከሆነ፤ ሽብረካችን፣ መቋሚያ እና ጸናጽል አያያዛችን፣ አካሄዳችን፣ አጫብር ወረብም ከሆነ እንዲሁ ሽብረካችን፣ መቋሚያ አያያዛችን፣ አዟዟራችን፣ ነጠቅ ነጠቅ አሰራራችን፣ ከበሮ አመታታችን ወዘተ ትክክለኛ እና ልክ እንደ አባቶቻችን አንዲሆን እንማራለን።
                </p>
            </div>

            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 lg:flex md:flex sm:block flex-cols lg:text-base md:text-base sm:text-xs'>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold'>ኮርስ የሚሰጥበት ሰአት</h1>
                        <div className='flex flex-col mt-4'>
                            <span><p className=''>ከ 5-12 አመት፡ እሁድ 2፡00pm-4:00pm</p></span><span><p className='pl-16'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 18+ አመት፡ ቅዳሜ 6፡00pm-8:00pm</p></span><span><p className='pl-8'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>
                    <div className='lg:w-1/2 flex justify-center items-center lg:mt-0 md:mt-0 sm:mt-4'>
                        <img src={course} alt="Image" className="object-cover w-3/4" />
                        </div>
                </div>
            </div>
            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 lg:flex md:flex sm:block flex-cols'>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={senbet} alt="Image" className="object-cover w-3/4" />

                    </div>
                    <div className='lg:w-1/2 lg:mt-0 md:mt-0 sm:mt-4 flex flex-col justify-center items-center lg:text-base md:text-base sm:text-xs'>
                        <h1 className='text-dark-blue font-bold'>የመዝሙር ጥናት ሰአት</h1>
                        <div className='flex flex-col mt-4'>
                            <span><p className=''>ከ 5-12 አመት፡ እሁድ 2፡00pm-4:00pm</p></span><span><p className='pl-16'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col'>
                            <span><p className=''>ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 18+ አመት፡ ሰኞ 6፡00pm-8:00pm</p></span><span><p className='pl-8'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SundaySchool