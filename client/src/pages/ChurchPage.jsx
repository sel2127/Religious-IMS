import React from 'react';
import bole from '../assets/Images/medhanealem.jpg';
import ch20 from '../assets/Images/ch20.jpg';
import photo from '../assets/Images/photo.jpg';
import photo1 from '../assets/Images/photo1.jpg';
import photo2 from '../assets/Images/photo2.jpg';
import photo3 from '../assets/Images/photo3.jpg';
import abat from '../assets/Images/admin.jpg';
import Map from "../components/Map";
import Breadcrumb from '../common/Breadcrumb';




function ChurchPage() {
  return (

    <div className=''>
      {/* <Breadcrumb/> */}


      <div className='text-5xl text-center font-bold mb-4'>
        {/* <h2>ታሪክ</h2> */}
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'> የቦሌ ቡልቡላ ደብረ መድኃኒት መድኃኔዓለም ቤተክርስቲያን አመሰራረት ታሪክ

          </h1>
          <p>ከ1980ዎቹ መጀመሪያ አንስቶ በርካታ ሰዎች ከቦሌ ቡልቡላ ገበሬዎች ላይ ባዶ ቦታ በመግዛት የመኖሪያ ቤት አየሰሩ መኖር የጀመሩ ሲሆን የነዋሪው ብዛት እየጨመረ በመምጣቱና ወደ ሳሪስ የሚያሻግረውን የቡልቡላ ወንዝ የእንጨት ድልድይ ለማደስ ሲባል ነዋሪው በእረፍት ቀኑ ማለትም እሁድ ሐምሌ 21 ቀን 1989 ዓ.ም. በህብረት ተሰማርቶ ተሻጋሪ ግንድ ለማስቀመጥ የወንዙ ዋሻ ጫፍ ሲቆፈር በወቅቱ በስራው ላይ ለነበሩት የአቡነ ገብረመንፈስቅዱስ ቤተክርስቲያን ካህን የመድኃኔዓለም ጽላት ተገለጸላቸው። ካህኑም ይህንኑ ለሕዝቡ አሳውቀው አቡነ ገብረመንፈስቅዱስ ቤተክርስቲያን በአደራ እንዲቀመጥ የተደረገ ሲሆን ወዲያውኑ ኮሚቴ አቋቁሞ አቶ ንጉሴ ገብረሥላሴ የተባሉት የቦሌ ቡልቡላ ነዋሪ ከእርሻ ማሳቸው ላይ ቆርሰው በሰጡት ቦታ ላይ መቃኞ ተገነባ። ነገር ግን መቃኞው በግንባታ ላይ እያለ ሰኔ 29 ቀን 1989 ዓ.ም. የአካባቢው ነዋሪ መኖሪያ ቤት "ጨረቃ ቤት ነው" ተብሎ በመንግስት እንዲፈርስ በመደረጉ ምክንያት የአካባቢው ነዋሪ በመበታተኑ የመቃኞ ግንባታ ስራው ለአንድ አመት ያህል የተጓተተ ሲሆን በ1991 መጀመሪያ ላይ ግንባታው ተጠናቆ ታቦተ ሕጉ ከአቡነ ገብረመንፈስቅዱስ ቤተክርስቲያን ወደ ጠቅላይ ቤተክህነት መንበረ ፓትርያሪክ ጽ/ቤት ተወስዶ በብጹዕ ወቅዱስ አቡነ ጳውሎስ መልካም ፈቃድ በብጹአን አባቶች እንዲባረክ ተደርጎ በወቅቱ የአዲስ አበባ ሀገረ ስብከት ሊቀጳጳስ በነበሩት በብጹዕ አቡነ መቃርዮስ መቃኞ ቤቱ ተቀድሶ ህዳር 7 ቀን 1991 ዓ.ም. የቅዳሴ ቤቱ ተከበረ።
          </p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'>ደብረ መድሃኒት መድሃኒአለም</h1>
          <div className='h-96 flex items-center justify-center overflow-hidden'>
            <img src={bole} alt="Image" className="object-cover w-full h-full" />
          </div>
        </div>

      </div>
      <div className='w-full py-8'>
        <p>ይህ በግራኝ መሐመድ ወረራ ወቅት አባቶች በዋሻ ደብቀውት እንደነበር የሚገመተው የመድኃኔዓለም ታቦት ተደብቆ በነበረበት ዋሻ አጠገብ አልፈው ድልድዩን የሚሻገሩ ገበሬዎች በአካባቢው የሆነ ኃርል እንዳለ ስለሚሰማቸው እርጥብ አረንጓዴ ሳር ቆርጠው ኦፉ (ይቅር በለኝ) እያሉ በመማጸን በፍርሃት ይሻገሩ እንደነበርና ሳያውቁ በዚህ ጽላት ያመልኩ እንደነበር ነዋሪዎች የሚመሰክሩት እውነት ነው። በቦሌ ቡልቡላ በማህበር የተደራጁ ግለሰቦች ቤት ገንብተው በብዛት መግባት ሲጀምሩ ቀደም ሲል የነበረው በጭቃ የተሰራው መቃኞ ቤተክርስቲያን ለምዕመናኑ ባለመብቃቱ በ1993 ዓ.ም. በአሁኑ ወቅት በአገልግሎት ላይ የሚገኘው ሕንጻ ቤተክርስቲያን ተጀምሮ በጥር ወር 1995 ዓ.ም. አገልግሎት እንዲጀምር ተደርጓል።</p>

      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'>ደብረ መድሃኒት መድሃኒአለም</h1>
          <div className='h-96 flex items-center justify-center overflow-hidden'>
            <img src={ch20} alt="Image" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'>
          </h1>
          <p className='pt-8'>በቦሌ ቡልቡላና አካባቢው የሚኖር የምዕመን ቁጥር ከጊዜ ወደ ጊዜ እየጨመረ በመምጣቱና የሪልእስቴትና የኮንዶሚኒየም ግንባታም በመበራከቱ ምክንያት ሰፊ ካቴድራል መገንባት እንዳለበት በምዕመንና በሰበካ ጉባኤ ስለታመነበት ከመጋቢት 24 ቀን 2010 ዓ.ም. ጀምሮ በ 5200 ካሬሜትር ቦታ ላይ ያረፈና ወደ 2000 ካሬሜትር ምድር ቤት ያለው ሕንጻ ግንባታ ተጀምሮ በአሁኑ ወቅት የምድር ቤት ስራው፣ የፎቅ ላይ ማስቀደሻ (ሜዛኒን) እና የዙሪያ በረንዳ አርክ ሥራዎች ተጠናቀው የበረንዳ ጣራ ሥራ ደረጃ ላይ ደርሶ ይገኛል። ክረምት ሳይገባ የበረንዳ ጣራ ግንባታውን ለማጠናቀቅና የዶም ኮለኖችን ሥራ ለማስቀጠል እንድንችል ብዙ ገንዘብ ስለሚያስፈልግ ከሰኔ 3 ቀን 2013 ዓ.ም. ጀምሮ ለአንድ ሳምንት የሚቆይ ባዛር በማዘጋጀት ገቢ ለማሰባሰብ እንዲቻል የሰበካ ጉባኤና የሕንጻ አሰሪ ኮሚቴ በጥምር ምዕመናኑን በማስተባበር ሰፊ ዝግጅት አድርገዋል። በባዛሩ ላይ የመንግሥት አካላት፣ ባለሃብቶች፣ የአዲስ አበባ ሀገረ ስብከት ሊቀጳጳስ፣ የተለያዩ አድባራትና ገዳማት አስተዳዳሪዎችና ምዕመና፣ የሰበካ ጉባኤው ማኅበረሰብ፣ የተለያዩ የደብሩ አጎራባች አድባራትና ገዳማት ማኅበረሰብ አባላት፣ የደብሩ አስተዳደር ሠራተኞች፣ ማህበረ ካህናት፣ የሰንበት ትምህርት ቤት ወጣቶችና መንፈሳዊ ማህበራት፣ ታዋቂ የጥበብ ሰዎች፣ ታዋቂ ሰባክያነ ወንጌልና ዘማሪያን ታድመውበት ለሕንጻው ጥሩ ገቢ ተሰብስቦበታል። አሁንም ሕንጻ ቤተክርስቲያኑ በጥሩ ስራ እየሔደ ሲሆን የሁሉንም ሕዝበ ክርስቲያን ትኩረት ይሻል።

          </p>
        </div>

      </div>
      <div className='w-full py-8'>
        <p>ይህ በግራኝ መሐመድ ወረራ ወቅት አባቶች በዋሻ ደብቀውት እንደነበር የሚገመተው የመድኃኔዓለም ታቦት ተደብቆ በነበረበት ዋሻ አጠገብ አልፈው ድልድዩን የሚሻገሩ ገበሬዎች በአካባቢው የሆነ ኃርል እንዳለ ስለሚሰማቸው እርጥብ አረንጓዴ ሳር ቆርጠው ኦፉ (ይቅር በለኝ) እያሉ በመማጸን በፍርሃት ይሻገሩ እንደነበርና ሳያውቁ በዚህ ጽላት ያመልኩ እንደነበር ነዋሪዎች የሚመሰክሩት እውነት ነው። በቦሌ ቡልቡላ በማህበር የተደራጁ ግለሰቦች ቤት ገንብተው በብዛት መግባት ሲጀምሩ ቀደም ሲል የነበረው በጭቃ የተሰራው መቃኞ ቤተክርስቲያን ለምዕመናኑ ባለመብቃቱ በ1993 ዓ.ም. በአሁኑ ወቅት በአገልግሎት ላይ የሚገኘው ሕንጻ ቤተክርስቲያን ተጀምሮ በጥር ወር 1995 ዓ.ም. አገልግሎት እንዲጀምር ተደርጓል።</p>
      </div>
      <div className='py-8 flex flex-cols space-x-8  overflow-hidden justify-center'>
        <div className=' inline-block relative ' style={{ maxHeight: '70vh' }}>
          <img src={photo} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xl">
            <div>
              <h3>ተልዕኮ</h3>
            </div>
            <div>
              <p className='text-sm p-4'>
                እንኳን ወደ ቦሌ ቡልቡላ ደብረ መድሃኒት መድሃኔዓለም ቤተክርስቲያን ድህረ ገጽ በደህና መጡ
              </p>
            </div>
          </div>
        </div>
        <div className=' inline-block relative' style={{ maxHeight: '70vh' }}>
          <img src={photo1} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xl">
            <div>
              <h3>ራዕይ</h3>
            </div>
            <div>
              <p className='text-sm p-4'>
                እንኳን ወደ ቦሌ ቡልቡላ ደብረ መድሃኒት መድሃኔዓለም ቤተክርስቲያን ድህረ ገጽ በደህና መጡ
              </p>
            </div>
          </div>
        </div>
        <div className=' inline-block relative' style={{ maxHeight: '70vh' }}>
          <img src={photo2} alt="Image" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xl">
            <div>
              <h3>ዕሴት</h3>
            </div>
            <div>
              <p className='text-sm p-4'>
                እንኳን ወደ ቦሌ ቡልቡላ ደብረ መድሃኒት መድሃኔዓለም ቤተክርስቲያን ድህረ ገጽ በደህና መጡ
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className='flex flex-col lg:flex-row py-8'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'>የአባቶች ምክር
          </h1>
          <p>
            ስለ እግዚአብሔር ብለን ሰውን እንውደድ እንጅ ስለ ሰው ብለን እግዚአብሔርን መውደድ አይገባንም ። በእግዚአብሔር ፊት ሰውን መውደድህን ይገለጥልህ እንጅ በሰው ፊት የእግዚአብሔር ወዳጅ ለመምሰል ብለህ የምትኖ ር አትሁን ። ለሰዎች ብለህ እንደወደድከው ለሰዎች ብለህ ልትጠላው ትችላለህ እና።
            የእግዚአብሔር ሰው መሆን ማለት እግዚአብሔርን መመገብ እንጅ እግዚአብሔርን ማወቅ አይደለም ። ለመዳን ብለህ እወቅ እንጅ በእውቀትህ የምትድን አይምሰልህ ። የማታውቀውን የምታውቀው ልትኖረው እንጅ እውቀቱ በክርስቶስ ቀኝ ሊያቆምህ አይምሰልህ ። በጎ ነገርን ያወቅሃት ዕለት ብቻ ደስ አይበልህ ፥ የሠራሃት ዕለት እንጅ ፥ በመሥራትህም አትመካ አልፈጸምካትምና ። ከእግዚአብሔር ያወቅሃትን መልካም ነገር ወዲያው ሥራት ፥ እየሠራሃት ያለችህን መልካም ነገር አትልቀቃት ። እየኖርክ ተማር እንጅ እየተማርክ ብቻ ዘመንህን እንዳትፈጽም ተጠንንቀቅ ። ያለ ዕውቀት ብትኖር ከፍርድ የምታመልጥ አይደለምና መቼም ቢሆን ከቤተክርስቲያን ጉባዔያት አትታጣ ፥ በማወቅህ ፍርድ አይቀርልህምና ያወቅኸውን ፈጥነህ ሥራ ።
            ቤተክርስቲያንን በኹለት መንገድ ማወቅህን አረጋግጥ ። እንደ አሕዛብ ጠላቷ እንዳትሆን በትምህርት ዕወቃት ፤ እንደ ፈሪሳውያን እንዳትሆን በኑሮ ዕወቃት ። ለሥርዓቷ ታማኝ ሁን ፥ አንተ ወደ ሥርዓቷ እደግ እንጅ ሥርዓቷ ወደ አንተ ፈቃድ እንዲወርድልህ አትውደድ ፤ ሰማያውይቷን ቤተክርሰቲያን ምድራዊት እንድትሆንልህ አትፍቀድ ። በቤተክርስቲያን መንፈሳዊ አንድነቶች ካልተሳተፍክ ከቤተክርስቲያን አንድነት እየተለየህ እንደሆነ እወቅ ። እሊህም ፦ ኪዳን ማስደረስ ፥ ማስቀደስ ና ንስሐ ገብቶ መቁረብ ፥ በምህላ ጸሎቶቿ በአዋጅ አጽዋማቷ መተባበር ናቸው ። ከቤት ከሚጸለይ አሥር ጸሎት ይልቅ በቤተክርስታያን የሚደረግ አንድ ጸሎት እንደሚበልጥ አውቀህ በየቀኑ ወደ እርስዋ ገሥግሥ ።
            በሕይወትህ ኹሉ ቤተክርስቲያናዊ ኹን ! ብቻየን ለፋሁበት ብለህ ገንዘብህን ብቻህን አትጨርሰው ። ከምታገኘው ሁሉ ለመድኀኔዓለም ድርሻ አስቀምጥ ። የለመነህን ሰው አትመርምረው ቢቻልህ ስጠው ባይቻልህ እዘንለት እንጅ ። ለስንፍናህ ሁሉ ምክንያት አታብጅለት ። መልካሙን ነገርም ዛሬ ሥራው ፥ ክፉውን ነገርም ዛሬ ተናዘዘው ። እያንዳንዱ የጊዜ ሽርፍራፊ የገነትና የሲዖል ሰው ለመሆንህ ዋጋ እንዳለው እወቅ ። ይቆየን መልካም የሆነ እግዚአብሔር ለመልካም የሚሳብ መልካምን የሚያደርግ በመልካሞ የሚጸና በጎ ሕሊና ይስጠን!

          </p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <div className='h-96 pt-8 flex items-center justify-center overflow-hidden'>
            <img src={abat} alt="Image" className="object-cover w-full h-full" />
          </div>
          <h1 className='text-3xl text-dark-blue font-bold mb-4 text-center'>መልዓከ ፀሃይ አባ ገብርኤል</h1>

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
              <h1 className='text-dark-blue font-bold text-3x1'>Location</h1>
            </span>
            <span>
              <p>Bole Bulbula</p>
            </span>
            <span>
              <p>Addis Ababa,Ethiopia</p>
            </span>
           </div>
          </div>
          <div className='lg:w-1/2'>
            <Map />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ChurchPage;
