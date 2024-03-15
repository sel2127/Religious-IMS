import React from 'react';
import senbet from '../Images/senbet.jpg';
import temari from '../Images/temari.jpg';
import senbete from '../Images/imagess.jpg';
import st from '../Images/st.jpg';
import course from '../Images/course.jpeg'
import Breadcrumb from '../common/Breadcrumb';


const SundaySchool = () => {
    return (
        <div className=''>
                 <Breadcrumb/>

            <div className='text-3xl text-center font-bold mb-4 text-dark-blue'>
                <h2>የባህረጥበብ ሰንበት ትምህርት አመሰራረት</h2>

            </div>
            <div className='pt-8'>
                <p>የባህረጥበብ ሰንበት ትምህርት ቤት የተመሰረተው ነሐሴ 24 ቀን ሲሆን በዚህ ዕለት የአቡነ ተክለሐይማኖት ዓመታዊ በዓል ስለሆነ ድርብ አገልግሎት ነውና የምስረታ በዓሉ 1 ሳምንት አልፎ ይከበራል። በዕለቱ ሰንበት ትምህርት ቤታችን መመስረቱን መሰረት ያደረጉ ልዩ ልዩ መርሃግብራት ይቀርባሉ። ከመርሃግብራቱ መካከል ጥቂቶቹ: ጭውውቶች፣ ቃለ መጠይቆች፣ ዝማሬ፣ ወረብ፣ መዝሙራዊ ተውኔት የመሳሰሉት መርሃግብራት ይቀርባሉ።</p>
            </div>

            <div className='py-8 flex flex-cols justify-center space-x-8 min-h-full'>
                <div className='relative' style={{ width: '100%' }}>
                    <img src={senbet} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                    <img src={st} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                    <img src={temari} alt="Image" className="object-cover w-full h-full" />
                </div>
                <div className=' relative' style={{ width: '100%' }}>
                    <img src={senbete} alt="Image" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className='py-8'>
                <h1 className='text-dark-blue text-center font-bold text-3x1'>በሰንበት ትምህርት ቤቱ የሚሰጡ ስልጠናዎች</h1>
                <h2 className=' font-bold text-3x1'> የአገልግሎት ስልጠና</h2>
                <p>
                    ይህ ስልጠና ማንኛውም የሰንበት ተማሪ አገልግሎት ከመጀመሩ በፊት የሚወስደው ስልጠና ነው። በዚህ ስልጠና ከአገልግሎት በፊት ስላሉ ቅድመ ሁኔታዎች፣ አገልግሎት ስናገለግል ማድረግ ስላለብን እና ስለሌለብን ነገሮች፣ አገልግሎት ከጀመርን በኋላስ ህይወታችን ምን መሆን አለበት ስለሚሉት ጉዳዮች በሰፊው በተጋባዥ መምህር ትምህርት የሚሰጥበት ነው።</p>
                <h2 className=' font-bold text-3x1'>የስርዓተ ዝማሬ ስልጠና</h2>
                <p>
                    ይህ ስልጠና ደግሞ የዝማሬ ስርአትን መሰረት አድርጎ ዝማሬያችን ከቅዱስ ያሬድ አንዲሁም ከአባቶቻችን ስርዓት ሳይወጣ እንዴት ማገልገል አንዳለብን ያስተምረናል። በዚህ ስልጠና ሽብሸባችን፣ ጭብጨባችን፣ ወረብም ከሆነ፤ ሽብረካችን፣ መቋሚያ እና ጸናጽል አያያዛችን፣ አካሄዳችን፣ አጫብር ወረብም ከሆነ እንዲሁ ሽብረካችን፣ መቋሚያ አያያዛችን፣ አዟዟራችን፣ ነጠቅ ነጠቅ አሰራራችን፣ ከበሮ አመታታችን ወዘተ ትክክለኛ እና ልክ እንደ አባቶቻችን አንዲሆን እንማራለን።
                </p>
            </div>

            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-cols'>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold text-5x1'>ኮርስ የሚሰጥበት ሰአት</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 5-12 አመት፡ ቅዳሜ 2፡00pm-4:00pm</p></span><span><p className='pl-16'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 18+ አመት፡ ቅዳሜ 6፡00pm-8:00pm</p></span><span><p className='pl-8'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={course} alt="Image" className="object-cover w-full h-full" />

                    </div>
                </div>
            </div>
            <div className=' py-8  min-h-full'>
                <div className='bg-gray-100 flex flex-cols'>
                    <div className='lg:w-1/2 p-4 flex justify-center items-center'>
                        <img src={senbet} alt="Image" className="object-cover w-full h-full" />

                    </div>
                    <div className='lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <h1 className='text-dark-blue font-bold text-5x1'>የመዝሙር ጥናት ሰአት</h1>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 5-12 አመት፡ ቅዳሜ 2፡00pm-4:00pm</p></span><span><p className='pl-16'>እሁድ 1፡30pm-3:30pm</p></span>

                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 12-18 አመት፡ ቅዳሜ 4፡00pm-6:00pm</p></span><span><p className='pl-8'>እሁድ 4፡00pm-6:00pm</p></span>
                        </div>
                        <div className='flex flex-col p-4 '>
                            <span><p className=''>ከ 18+ አመት፡ ቅዳሜ 6፡00pm-8:00pm</p></span><span><p className='pl-8'>እሁድ 6፡00pm-8:00pm</p></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SundaySchool
