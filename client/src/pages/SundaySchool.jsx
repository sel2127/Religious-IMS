import React from 'react';
import senbet from '../assets/Images/senbet.jpg';
import temari from '../assets/Images/temari.jpg';
import senbete from '../assets/Images/imagess.jpg';
import st from '../assets/Images/st.jpg';
import course from '../assets/Images/course.jpeg'


const SundaySchool = () => {
    return (
        <div className='pt-8'>
             

            <div className='text-3xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center'>
                <h2 className="text-3xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center"> የባህረጥበብ ሰንበት ትምህርት አመሰራረት</h2>

            </div>
            <div className="text-sm md:text-base lg:text-lg">
                <p>የባህረጥበብ ሰንበት ትምህርት ቤት የተመሰረተው ነሐሴ 24 ቀን ሲሆን በዚህ ዕለት የአቡነ ተክለሐይማኖት ዓመታዊ በዓል ስለሆነ ድርብ አገልግሎት ነውና የምስረታ በዓሉ 1 ሳምንት አልፎ ይከበራል። በዕለቱ ሰንበት ትምህርት ቤታችን መመስረቱን መሰረት ያደረጉ ልዩ ልዩ መርሃግብራት ይቀርባሉ። ከመርሃግብራቱ መካከል ጥቂቶቹ: ጭውውቶች፣ ቃለ መጠይቆች፣ ዝማሬ፣ ወረብ፣ መዝሙራዊ ተውኔት የመሳሰሉት መርሃግብራት ይቀርባሉ።</p>
            </div>

            <div className='flex flex-col md:flex-row py-8 space-y-8 md:space-x-8 md:space-y-0 overflow-hidden justify-center'>
                <div className='relative'>
                    <img src={senbet} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative'>
                    <img src={st} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative'>
                    <img src={temari} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative'>
                    <img src={senbete} alt="Image" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className='py-8'>
                <h1 className="text-xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center">በሰንበት ትምህርት ቤቱ የሚሰጡ ስልጠናዎች</h1>
                <h2 className="text-3xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center"> የአገልግሎት ስልጠና</h2>
                <p className="text-sm md:text-base lg:text-lg">
                    ይህ ስልጠና ማንኛውም የሰንበት ተማሪ አገልግሎት ከመጀመሩ በፊት የሚወስደው ስልጠና ነው። በዚህ ስልጠና ከአገልግሎት በፊት ስላሉ ቅድመ ሁኔታዎች፣ አገልግሎት ስናገለግል ማድረግ ስላለብን እና ስለሌለብን ነገሮች፣ አገልግሎት ከጀመርን በኋላስ ህይወታችን ምን መሆን አለበት ስለሚሉት ጉዳዮች በሰፊው በተጋባዥ መምህር ትምህርት የሚሰጥበት ነው።</p>
                <h2 className="text-3xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center">የስርዓተ ዝማሬ ስልጠና</h2>
                <p className="text-sm md:text-base lg:text-lg">
                    ይህ ስልጠና ደግሞ የዝማሬ ስርአትን መሰረት አድርጎ ዝማሬያችን ከቅዱስ ያሬድ አንዲሁም ከአባቶቻችን ስርዓት ሳይወጣ እንዴት ማገልገል አንዳለብን ያስተምረናል። በዚህ ስልጠና ሽብሸባችን፣ ጭብጨባችን፣ ወረብም ከሆነ፤ ሽብረካችን፣ መቋሚያ እና ጸናጽል አያያዛችን፣ አካሄዳችን፣ አጫብር ወረብም ከሆነ እንዲሁ ሽብረካችን፣ መቋሚያ አያያዛችን፣ አዟዟራችን፣ ነጠቅ ነጠቅ አሰራራችን፣ ከበሮ አመታታችን ወዘተ ትክክለኛ እና ልክ እንደ አባቶቻችን አንዲሆን እንማራለን።
                </p>
            </div>

            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-col md:flex-row py-8 space-y-8 md:space-x-8 md:space-y-0 overflow-hidden justify-center'>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className="text-3xl md:text-2xl sm:text-xl text-dark-blue font-bold mb-4 text-center">ኮርስ የሚሰጥበት ሰአት</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 5-12 አመት፡ ቅዳሜ 2፡00pm-4:00pm</p></span><span><p className='pl-16 text-sm md:text-base lg:text-lg'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8 text-sm md:text-base lg:text-lg'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 18+ አመት፡ ቅዳሜ 6፡00pm-8:00pm</p></span><span><p className='pl-8 text-sm md:text-base lg:text-lg'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={course} alt="Image" className="object-cover w-full h-full" />

                    </div>
                </div>
            </div>
            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-col md:flex-row py-8 space-y-8 md:space-x-8 md:space-y-0 overflow-hidden justify-center'>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={senbet} alt="Image" className="object-cover w-full h-full" />

                    </div>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold text-5x1'>የመዝሙር ጥናት ሰአት</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 5-12 አመት፡ ቅዳሜ 2፡00pm-4:00pm</p></span><span><p className='pl-16 text-sm md:text-base lg:text-lg'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8 text-sm md:text-base lg:text-lg'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className="text-sm md:text-base lg:text-lg">ከ 18+ አመት፡ ቅዳሜ 6፡00pm-8:00pm</p></span><span><p className='pl-8 text-sm md:text-base lg:text-lg'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SundaySchool
