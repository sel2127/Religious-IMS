import React from 'react'
import Calender from '../components/Calender'
import Buhe from '../assets/Images/buhe.jpg'
import Meskel from '../assets/Images/meskel.jpg'
import Timket from '../assets/Images/timket.jpg'
import Breadcrumb from '../common/Breadcrumb';



const Event = () => {
    return (
        <div>
            <Breadcrumb />

            <div className='mx-auto py-8'>
                <div className='flex flex-row space-x-4 pb-8'>
                    <div className='lg:w-1/4 flex flex-col justify-center'>
                        <h2 className='text-3xl text-dark-blue'>በዓለ ደብረ ታቦር እና ቡሄ</h2>
                        <p className=''>ነሐሴ ፲፫/13</p>
                    </div>
                    <div className='w-3/4 flex  bg-gray-100 min-h-full'>
                        <div className='w-2/3 p-8'>
                            <p>ጌታችን አምላካችንና መድኀኒታችን ኢየሱስ ክርስቶስ በደብረ ታቦር ብርሃነ መለኮቱን፣ ክብረ መንግሥቱን መግለጡን በማሰብ በየዓመቱ ነሐሴ ፲፫ ቀን በዓሉ በድምቀት ይከበራል፡፡ ይህ በዓል በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ምእመናን ዘንድ ‹ቡሄ› በመባል ይታወቃል፡፡ ቡሄ ማለት ‹መላጣ፣ ገላጣ› ማለት ነው፡፡ በአገራችን ክረምቱ፣ ጭጋጉ፣ ደመናው ተወግዶ የብርሃን ወገግታ የሚታይበት በዚሁ በዓል አካባቢ ስለ ኾነ በዓሉ ‹ቡሄ› ተብሎ ይጠራል፡፡ በዓለ ደብረ ታቦር ጌታችን ምሥጢረ መለኮቱን የገለጠበት፤ ብርሃን የታየበትና ድምፀ መለኮቱ የተሰማበ  ዕለት ስለ ኾነ ‹የብርሃን› ወይም ‹የቡሄ› በዓል ይባላል፡፡</p>
                        </div>
                        <div className='w-1/3 flex justify-end'>
                            <div className='h-64'>
                                <img src={Buhe} alt="Image" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-4 pb-8'>
                    <div className='lg:w-1/4 flex flex-col justify-center'>
                        <h2 className='text-3xl text-dark-blue'>በዓለ ቅዱስ መስቀል </h2>
                        <p className=''>መስከረም ፲፯/17</p>
                    </div>
                    <div className='w-3/4 flex space-x-4 bg-gray-100 min-h-full'>
                        <div className='w-2/3 p-8'>
                            <p>መስቀል ቤተ ክርስቲያናችን ከምታከብራቸው ዘጠኙ የጌታችን ንዑሳን በዓላት አንዱ በዓል ነው፡፡ መስቀል የሰላማችንና የድኅነታችን የመቀደሳችን ዓርማ፣ ኢየሱስ ክርስቶስ የሰውን ልጆች ለማዳን፥ የዘላለም ሕይወትን ለመስጠት መስዋዕትነት የከፈለበት ቅዱስ ሥጋውን ክቡር ደሙን ያፈሰሰበት መንበር፥ ሲሆን አምላካችንን የምንመለከትበት መስታወት ነው። በሀገራችን በኢትዮጵያ የመስቀልን በዓል ደመራ በመደመርና ችቦ በማብራት፥ ቅዳሴ በመቀደስና ማኅሌት በመቆም የምናከብረው ለዚህ ነው። በዚሁም ላይ ይህን ታላቅ ዕፀ መስቀል በወቅቱ የነበሩ ታላላቅ ነገሥታት የሚያደርጋቸውን ተዓምራት በማየት ለእያንዳንዳቸው ይደርሳቸው ዘንድ ከአራት ክፍል ሲከፍሉት ከአራቱ አንዱ የቀኝ እጁ ያረፈበት ግማድ /ክፋይ/ ብቻ በደብረ ከርቤ ግሸን ማርያም ሲገኝ ሌሎች ሦስቱ ግን የት እንደደረሱ አይታወቅም።</p>
                        </div>
                        <div className='w-1/3 flex justify-end'>
                            <div className='h-64'>
                                <img src={Meskel} alt="Image" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row space-x-4 pb-8'>
                    <div className='lg:w-1/4 flex flex-col justify-center'>
                        <h2 className='text-3xl text-dark-blue'>በዓለ ጥምቀት</h2>
                        <p className=''>ጥር ፲፩/11</p>
                    </div>
                    <div className='w-3/4 flex space-x-4 bg-gray-100 min-h-full'>
                        <div className='w-2/3 p-8'>
                            <p>እንኳን ለብርሃነ ጥምቀቱ በሰላም አደረሳችሁ
                                የጥምቀት በዓል ባሕረ ጥምቀት ታሪካዊ አመጣጥ
                                ለጥምቀት በዓል ባሕረ ጥምቀት ታሪካዊ አመጣጥ መነሻ የሚሆነን በዋነኝነት የክርስቶስ ከገሊላ ወደ ዮርዳኖስ መሄድ ሆኖ ቅድመ በዓል ኤጲፋንያ (ከመገለጥ በዓል በፊት) እስራኤላውያን በብሉይ ኪዳን ወንዝ ወርደው፣ ዣንጥላ አስጥለው፣ ዳስ ሠርተው የመልካም ዛፍ ፍሬና የለመለመ ቅርንጫፍ ወስደው እያንዳንዱ አቅሙ የሚፈቅድለትን ስጦታ እየሰጠ በዓለ መጸለትን (የዳስ በዓልን) እግዚአብሔር ወደ መረጠው ስፍራ በመሄድ “አባቶቻችንን ባህር ከፍለህ ደመና ጋርደህ ያሻገርካቸው” አምላክ አንተ ነህ በማለት የተቀደሰ ጉባዔ በማድረግ በዓሉን ያከብሩ ነበር፡፡ ዘሌ 23፡1-49 ዘጸ 23፡14፣ ዘዳ 16፡16</p>
                        </div>
                        <div className='w-1/3 flex justify-end'>
                            <div className='h-64'>
                                <img src={Timket} alt="Image" className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>





            </div>


        </div>
    )
}

export default Event
